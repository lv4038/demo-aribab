import React, { memo, useState } from "react";
import { DemoWrapper } from "./style";

import Indicator from "@/base-ui/indicator";

const Demo = memo(() => {
  const names = ["小静", "小文", "小晴", "小天", "小爱", "小名"];
  const [selectIndex, setSelectIndex] = useState(0);

  function handleToggleClick(isNext) {
    // 当前元素的索引  +1或者-1
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) newIndex = names.length - 1;
    if (newIndex > names.length - 1) newIndex = 0;
    // 设置selectIndex的值
    setSelectIndex(newIndex);
  }
  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={(e) => handleToggleClick(false)}>上一个</button>
        <button onClick={(e) => handleToggleClick(true)}>下一个</button>
      </div>
      <div className="list">
        {/* 将索引传给指示器组件 */}
        <Indicator selectIndex={selectIndex}>
          {names.map((item) => {
            return <button key={item}>{item}</button>;
          })}
        </Indicator>
      </div>
    </DemoWrapper>
  );
});

export default Demo;
