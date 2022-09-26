import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RoomsWrapper } from "./style";

import RoomItem from "@/components/room-item";
import { useNavigate } from "react-router-dom";
import { changeDetailInfoAction } from "@/store/modules/detail";

const EntireRooms = memo((props) => {
  const { roomsList, totalCount, isLoading } = useSelector((state) => ({
    roomsList: state.entire.roomsList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading,
  }));

  const dispatch = useDispatch();

  const navigate = useNavigate();
  // 路由跳转，item是room-item组件传递过来的数据
  const handleItemClick = useCallback(
    (item) => {
      // 将数据保存到redux ，然后在detail组件中获取
      dispatch(changeDetailInfoAction(item));
      navigate("/detail");
    },
    [navigate, dispatch]
  );

  return (
    <RoomsWrapper>
      <h2 className="title">{`共${totalCount}住宿`}</h2>
      <div className="list">
        {roomsList?.map((item) => {
          return (
            <RoomItem
              itemClick={handleItemClick}
              itemData={item}
              itemWidth="20%"
              key={item._id}
            />
          );
        })}
      </div>

      {/* 分页器翻页时，请求数据过程中的蒙版 数据请求成功就隐藏 */}
      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  );
});

EntireRooms.propTypes = {
  infoData: PropTypes.object,
};

export default EntireRooms;
