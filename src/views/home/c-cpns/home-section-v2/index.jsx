import PropTypes from "prop-types";
import React, { memo, useState, useCallback } from "react";

import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section.tabs";

import { SectionV2Wrapper } from "./style";
import SectionFooter from "@/components/section-footer";

// 房间列表通用组件2，使用了tabs组件 使用了父子组件通信
const HomeSectionV2 = memo((props) => {
  const { infoData = {} } = props;

  // 选项卡的默认值，加载完页面默认是第一个数据
  const initName = Object.keys(infoData.dest_list)[0];
  const [name, setName] = useState(initName);
  // tab组件切换数据  useCallback对返回的函数优化
  const handleTabClick = useCallback((index, name) => {
    setName(name);
  }, []);
  // 获取数组中的name值
  const tabNames = infoData.dest_address?.map((item) => {
    return item.name;
  });
  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      {/* 选项卡 */}
      <SectionTabs tabNames={tabNames} tabClick={handleTabClick} />
      {/* 房间列表 */}
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.33%" />
      {/* 根据name值返回不同的内容 */}
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV2;
