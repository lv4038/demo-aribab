import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";

import { Carousel } from "antd";

import { ItemWrapper } from "./style";
import Rating from "@mui/material/Rating";
import IconArrowLeft from "@/assets/svg/icon_arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";

// 单个房间  父组件是SectionRooms 房间列表
const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%", itemClick } = props;
  const [selectIndex, setSelectIndex] = useState(0);

  // 获取Carousel组件 切换图片需要调用它的方法
  const sliderRef = useRef();

  function handleControlClick(isNext = true, e) {
    // 阻止冒泡 否则点击切换图片的箭头点击事件会冒泡到 路由跳转
    e.stopPropagation();
    // Carousel组件切换图片的方法
    isNext ? sliderRef.current.next() : sliderRef.current.prev();

    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    const length = itemData.picture_urls?.length;
    // 当索引小于0，也就是切换到第一张时，让索引等于最后一张
    if (newIndex < 0) newIndex = length - 1;
    // 切换到最后一张时，索引等于第一张
    if (newIndex > length - 1) newIndex = 0;
    setSelectIndex(newIndex);
  }

  // 普通组件
  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt={itemData.name} />
    </div>
  );

  // 轮播图组件
  const sliderElement = (
    <div className="slider">
      {/* 左右箭头控制 */}
      <div className="control">
        <div className="btn left" onClick={(e) => handleControlClick(false, e)}>
          <IconArrowLeft width="24" height="24" />
        </div>
        <div className="btn right" onClick={(e) => handleControlClick(true, e)}>
          <IconArrowRight width="24" height="24" />
        </div>
      </div>
      <div className="indicator">
        {/* 指示器 */}
        <Indicator selectIndex={selectIndex}>
          {itemData.picture_urls?.map((item, index) => {
            return (
              <div className={`dots`}>
                <span
                  key={item}
                  className={`dot-item ${
                    selectIndex === index ? "active" : ""
                  }`}
                ></span>
              </div>
            );
          })}
        </Indicator>
      </div>
      {/* 轮播图 */}
      <Carousel dots={false} ref={sliderRef}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );

  // 跳转详情页
  function handleItemClick(item) {
    // 跳转操作通过参数函数进行，也就是在父组件中进行跳转
    if (itemClick) itemClick(item);
  }

  return (
    // 绑定一个服务器返回的颜色值
    <ItemWrapper
      verifyColor={itemData?.verify_info.text_color || "#39576a"}
      itemWidth={itemWidth}
      onClick={(e) => handleItemClick(itemData)}
    >
      <div className="inner">
        {/* 有数据就显示轮播图组件，没有数据就显示普通组件 */}
        {!itemData.picture_urls ? pictureElement : sliderElement}
        <div className="desc">{itemData.verify_info.messages.join(" . ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}</div>
        <div className="bottom">
          <Rating
            readOnly
            value={itemData.star_rating ?? 5}
            precision={0.1}
            sx={{ fontSize: "12px", color: "#00848A" }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">. {itemData.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string,
};

export default RoomItem;
