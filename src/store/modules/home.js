import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeHotRecommendData,
  getHomeLongforData,
  getHomePlusData,
} from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 异步操作 发起请求  派发action
export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  (payload, store) => {
    // 高性价比房源数据
    getHomeGoodPriceData().then((res) => {
      store.dispatch(changeGoodsPriceAction(res));
    });
    // 高评分房源数据
    getHomeHighScoreData().then((res) => {
      store.dispatch(changeHighScoreDataAction(res));
    });

    // 房间折扣数据
    getHomeDiscountData().then((res) => {
      store.dispatch(changeDiscountDataAction(res));
    });

    // 热门推荐
    getHomeHotRecommendData().then((res) => {
      store.dispatch(changeHotRecommendDataAction(res));
    });

    // 更多出行
    getHomeLongforData().then((res) => {
      store.dispatch(changeLongforDataAction(res));
    });

    // 房间plus
    getHomePlusData().then((res) => {
      store.dispatch(changePlusDataAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    // 高性价比房源数据
    goodPriceInfo: {},
    // 高评分房源
    highScoreInfo: {},
    // 折扣房间
    discountInfo: {},
    // 热门推荐
    recommendInfo: {},
    // 更多出行
    longforInfo: {},
    // 房间plus
    plusInfo: {},
  },
  reducers: {
    changeGoodsPriceAction(state, action) {
      state.goodPriceInfo = action.payload;
    },
    changeHighScoreDataAction(state, action) {
      state.highScoreInfo = action.payload;
    },
    changeDiscountDataAction(state, action) {
      state.discountInfo = action.payload;
    },
    changeHotRecommendDataAction(state, action) {
      state.recommendInfo = action.payload;
    },
    changeLongforDataAction(state, action) {
      state.longforInfo = action.payload;
    },
    changePlusDataAction(state, action) {
      state.plusInfo = action.payload;
    },
  },
  extraReducers: {
    // [fetchHomeDataAction.fulfilled](state, action) {
    //   state.goodPriceInfo = action.payload;
    // },
  },
});
// 定义
export const {
  changeGoodsPriceAction,
  changeHighScoreDataAction,
  changeDiscountDataAction,
  changeHotRecommendDataAction,
  changeLongforDataAction,
  changePlusDataAction,
} = homeSlice.actions;

export default homeSlice.reducer;
