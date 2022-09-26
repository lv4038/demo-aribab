import ScrollView from "@/base-ui/scroll-view";
import RoomItem from "@/components/room-item";
import SectionFooter from "@/components/section-footer";
import SectionHeader from "@/components/section-header";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionV3Wrapper } from "./style";

const HomeSectionV3 = memo((props) => {
  const { infoData } = props;
  return (
    <div>
      <SectionV3Wrapper>
        <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
        <div className="room-list">
          <ScrollView>
            {infoData.list.map((item) => {
              return <RoomItem itemData={item} itemWidth="20%" key={item.id} />;
            })}
          </ScrollView>
        </div>
        <SectionFooter name="plus" />
      </SectionV3Wrapper>
    </div>
  );
});

HomeSectionV3.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV3;
