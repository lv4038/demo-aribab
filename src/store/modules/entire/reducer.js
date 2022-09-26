import * as actionTypes from "./constants";

const initialState = {
  // 当前页码
  currentPage: 0,
  // 数据总数
  totalCount: 0,
  // 当前页房间列表
  roomsList: [],
  // 蒙版是否显示
  isLoading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case actionTypes.CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };
    case actionTypes.CHANGE_ROOM_LIST:
      return { ...state, roomsList: action.roomsList };
    case actionTypes.CHANGE_IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
}

export default reducer;
