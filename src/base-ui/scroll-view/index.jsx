import React, { memo, useEffect, useRef, useState } from "react";
import { ViewWrapper } from "./style";

import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconArrowLeft from "@/assets/svg/icon_arrow-left";

const ScrollView = memo((props) => {
  // 显示隐藏右箭头
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  // 索引记录
  const [posIndex, setPosIndex] = useState(0);

  // 记录totalDistance的值，不需要用useState，会引起组件刷新
  // useRef总是返回同一个值
  const totalDistanceRef = useRef();

  const scrollContentRef = useRef();
  useEffect(() => {
    // 元素的真实宽度
    const scrollWidth = scrollContentRef.current.scrollWidth;
    // 滚动元素的可视区域的宽度
    const clientWidth = scrollContentRef.current.clientWidth;
    // 真实宽度 - 可视区宽度 = 隐藏宽度，
    const totalDistance = scrollWidth - clientWidth;
    // 大于0 证明有内容隐藏，需要滚动，显示按钮
    setShowRight(totalDistance > 0);
    //赋值后在handleRightClick可以使用
    totalDistanceRef.current = totalDistance;
  }, [props.children]);

  function handleControlClick(isRight) {
    // 每次索引+1，找到下一个元素, 每次索引-1，找到上一个元素
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    // 当前元素
    const newEl = scrollContentRef.current.children[newIndex];
    // 当前元素左边框到父元素左边框的距离
    const newOffsetLeft = newEl.offsetLeft;
    // offsetLeft是当前元素左边框相对于定位父元素左边框的距离
    scrollContentRef.current.style.transform = `translateX(-${newOffsetLeft}px)`;
    // 索引每次的递增 切换下一个
    setPosIndex(newIndex);
    // 如果隐藏距离大于当前元素偏移值，右箭头就显示
    setShowRight(totalDistanceRef.current > newOffsetLeft);
    // 左箭头一开始是隐藏的，如果左边有偏移量，显示左箭头
    setShowLeft(newOffsetLeft > 0);
  }
  return (
    <ViewWrapper>
      {showLeft && (
        <div
          className="control arrow-left"
          onClick={(e) => handleControlClick(false)}
        >
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div
          className="control arrow-right"
          onClick={(e) => handleControlClick(true)}
        >
          <IconArrowRight />
        </div>
      )}
      {/* 显示的内容是不固定的，可以传入一个组件 */}
      <div className="srcoll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
