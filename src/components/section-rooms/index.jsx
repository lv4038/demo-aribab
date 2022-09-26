import PropTypes from "prop-types";
import React, { memo } from "react";
// 单个房间
import RoomItem from "../room-item";
import { RoomsWrapper } from "./style";

// 房间列表组件
const SectionRooms = memo((props) => {
  // itemWidth是房间单组件的宽度 父组件决定
  const { roomList, itemWidth } = props;
  return (
    <RoomsWrapper className="room-list">
      {roomList?.slice(0, 8).map((item) => {
        // 房源列表组件
        return <RoomItem key={item.id} itemData={item} itemWidth={itemWidth} />;
      })}
    </RoomsWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
  itemWidth: PropTypes.string,
};

export default SectionRooms;
