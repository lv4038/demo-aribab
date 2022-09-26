import { getEntireHomeList } from "@/services/modules/entire";
import * as actionTypes from "./constants";

// 当前页
export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage,
});
// 数据总数
export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount,
});

// 房间列表
export const changeRoomsListAction = (roomsList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomsList,
});

// 改变蒙版显示隐藏
export const changeIsLoading = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading,
});

// 网络请求
export const fetchRoomListAction = () => {
  return async (dispatch, getState) => {
    // 获取state中currentPage的值，是页码
    const currentPage = getState().entire.currentPage;
    // 发起请求前，显示蒙版
    dispatch(changeIsLoading(true));
    const res = await getEntireHomeList(currentPage * 20);
    // 网络请求成功后隐藏蒙版
    dispatch(changeIsLoading(false));
    const roomsList = res.list;
    const totalCount = res.totalCount;
    // 派发action 修改数据
    dispatch(changeRoomsListAction(roomsList));

    dispatch(changeTotalCountAction(totalCount));
  };
};
