import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";

// 指示器组件，可以传入插槽内容进行滚动
const Indicator = memo((props) => {
  const { selectIndex = 0 } = props;
  // 切换的元素是div的子元素，先获取div元素
  const contentRef = useRef();
  useEffect(() => {
    // 当前元素
    const selectEl = contentRef.current.children[selectIndex];
    // 当前元素的offsetLeft
    const itemLeft = selectEl.offsetLeft;
    // 当前元素自身的宽度
    const itemWidth = selectEl.clientWidth;
    // 容器的可视宽度
    const contentWidth = contentRef.current.clientWidth;
    // 指示器的实际宽度
    const contentScroll = contentRef.current.scrollWidth;
    // 隐藏部分
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5;
    // 实际宽度-可视宽度 = 可滚动距离
    const totalDistance = contentScroll - contentWidth;
    // 边界判断
    if (distance < 0) distance = 0;
    if (distance > totalDistance) distance = totalDistance;

    // 移动元素
    contentRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number,
};

export default Indicator;
