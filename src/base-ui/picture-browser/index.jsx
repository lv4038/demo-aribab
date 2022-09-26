import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { BrowserWrapper } from "./style";

import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconArrowLeft from "@/assets/svg/icon_arrow-left";
import IconClose from "@/assets/svg/icon_close";
import IconTriangleBottom from "@/assets/svg/icon_triangle-bottom";
import Indicator from "../indicator";
import IconTriangleTop from "@/assets/svg/icon_triangle-top";

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props;
  // 记录图片索引
  const [currentIndex, setCurrentIndex] = useState(0);
  // 记录是切换上一张还是下一张，用于使用不同的动画样式
  const [isNext, setIsNext] = useState(true);
  // 显示隐藏图片列表
  const [showList, setShowList] = useState(true);
  useEffect(() => {
    // 图片展示器显示时，浏览器不能滚动
    document.body.style.overflow = "hidden";

    return () => {
      // 关闭时，重新开启滚动
      document.body.style.overflow = "auto";
    };
  }, []);

  // 关闭展示器
  function handleCloseBtn() {
    closeClick(false);
  }

  // 切换上一张
  function handleControlClick(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = pictureUrls.length - 1;
    if (newIndex > pictureUrls.length - 1) newIndex = 0;
    setCurrentIndex(newIndex);
    setIsNext(isNext);
  }

  // 点击列表切换对应的图片
  function handleBottomClick(index) {
    // isNext的值控制向左移动还是向右移动
    // 如果要点击的图片索引大于当前显示的图片索引，返回true，向右移动
    // 如果要点击的图片索引小于当前显示的图片索引，返回false，向左移动
    setIsNext(index > currentIndex);
    // 将当前被点击的图片index赋值给currentIndex
    setCurrentIndex(index);
  }

  return (
    // 传递布尔值给样式组件
    <BrowserWrapper isNext={isNext} showList={showList}>
      {/* 关闭按钮 */}
      <div className="top">
        <div className="close-btn" onClick={handleCloseBtn}>
          <IconClose />
        </div>
      </div>
      {/* 图片切换 */}
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={(e) => handleControlClick(false)}>
            <IconArrowLeft height="77" width="77" />
          </div>
          <div className="btn right" onClick={(e) => handleControlClick(true)}>
            <IconArrowRight height="77" width="77" />
          </div>
        </div>

        <div className="picture">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={200}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      {/* 底部指示器 */}
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{pictureUrls.length}
              </span>
              <span>当前图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={(e) => setShowList(!showList)}>
              <span>{showList ? "隐藏" : "显示"}照片列表</span>
              {showList ? <IconTriangleBottom /> : <IconTriangleTop />}
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {pictureUrls.map((item, index) => {
                return (
                  // 点击其中一张图片，将当前图片的索引赋值给currentIndex
                  // currentIndex的值就会被传给Indicator，从而切换图片
                  <div
                    className="item"
                    key={item}
                    onClick={(e) => handleBottomClick(index)}
                  >
                    <img
                      src={item}
                      alt=""
                      className={`${currentIndex === index ? "active" : ""}`}
                    />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  );
});

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
};

export default PictureBrowser;
