import ScrollView from "@/base-ui/scroll-view";
import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { TabsWrapper } from "./style";

// 切换房间列表组件
const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  function hanldeItemClick(index, name) {
    setCurrentIndex(index);
    // 将当前选中的索引传给父组件，用于数据的数组索引切换
    tabClick(index, name);
  }
  return (
    <TabsWrapper>
      {/* 滚动组件 内容使用插槽 props.children */}
      <ScrollView>
        {tabNames.map((name, index) => {
          return (
            <p
              className={`item ${currentIndex === index ? "active" : ""}`}
              key={name}
              onClick={(e) => hanldeItemClick(index, name)}
            >
              {name}
            </p>
          );
        })}
      </ScrollView>
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
  tabClick: PropTypes.func,
};

export default SectionTabs;
