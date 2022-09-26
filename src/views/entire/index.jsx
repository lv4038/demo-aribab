import AppHeader from "@/components/app-header";
import { fetchRoomListAction } from "@/store/modules/entire/actionCreators";
import { changeHeaderConfigAction } from "@/store/modules/main";
import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import EntireFilter from "./c-cpns/entire-filter";
import EntirePagination from "./c-cpns/entire-pagination";
import EntireRooms from "./c-cpns/entire-rooms";
import { EntireWrapper } from "./style";

const Entire = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    // fetchRoomListAction返回一个函数，函数会被立即执行
    dispatch(fetchRoomListAction());
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }));
  });
  return (
    <EntireWrapper>
      <AppHeader />
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
