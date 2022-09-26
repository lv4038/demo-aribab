import PropTypes from "prop-types";
import React, { memo } from "react";

// 区域标题
import SectionHeader from "@/components/section-header";
// 房间列表
import SectionRooms from "@/components/section-rooms";
import { SectionV1Wrapper } from "./style";
import SectionFooter from "@/components/section-footer";

// 房间区域通用组件，父组件只需要传入不同的数据 这里就能渲染不同的内容
const HomeSectionV1 = memo((props) => {
  const { infoData } = props;
  return (
    <SectionV1Wrapper>
      <SectionHeader
        roomList={infoData}
        title={infoData.title}
        subTitle={infoData.subtitle}
      />
      <SectionRooms roomList={infoData.list} itemWidth="25%" />
      <SectionFooter />
    </SectionV1Wrapper>
  );
});

HomeSectionV1.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV1;
