import PropTypes from "prop-types";
import React, { memo } from "react";
import { useState } from "react";
import { TabsWrapper } from "./style";

// 选项卡组件，多个选项可以点击，点击要获取被点击的元素索引
// 传给父元素，父元素再用这个索引，动态更新传给另一个组件的内容
const SearchTabs = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { titles, tabClick } = props;

  function handleItemClick(index) {
    // 更新索引值
    setCurrentIndex(index);
    // 传递当前被点击的元素索引 给父元素
    if (tabClick) tabClick(index);
  }
  return (
    <TabsWrapper>
      {titles.map((item, index) => {
        return (
          <div
            className={`item ${currentIndex === index ? "active" : ""}`}
            key={item}
            onClick={(e) => handleItemClick(index)}
          >
            <span className="text">{item}</span>
            <span className="bottom"></span>
          </div>
        );
      })}
    </TabsWrapper>
  );
});

SearchTabs.propTypes = {
  titles: PropTypes.array,
};

export default SearchTabs;
