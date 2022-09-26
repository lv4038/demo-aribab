import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    headerConfig: {
      // 是否固定定位
      isFixed: false,
      // 是否添加有透明度的类名
      topAlpha: false,
    },
  },
  reducers: {
    changeHeaderConfigAction(state, action) {
      state.headerConfig = action.payload;
    },
  },
});

export const { changeHeaderConfigAction } = mainSlice.actions;

export default mainSlice.reducer;
