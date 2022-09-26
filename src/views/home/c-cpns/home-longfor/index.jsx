import PropTypes from "prop-types";
import React, { memo } from "react";
import { LongforWrapper } from "./style";

import ScrollView from "@/base-ui/scroll-view";
import LongforItem from "@/components/longfor-item";
import SectionFooter from "@/components/section-footer";
import SectionHeader from "@/components/section-header";

// 更多出行组件
const HomeLongfor = memo((props) => {
  const { infoData } = props;
  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {infoData.list?.map((item) => {
            return <LongforItem key={item.city} itemData={item} />;
          })}
        </ScrollView>
      </div>
      <SectionFooter />
    </LongforWrapper>
  );
});

HomeLongfor.propTypes = {
  infoData: PropTypes.object,
};

export default HomeLongfor;
