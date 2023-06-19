import { ISetting, ITaxonomy, IUser } from "@/utils/interface";
import { createSlice } from "@reduxjs/toolkit";

// export interface ISettingState {
//   settings?: ISetting;
// }

export const initialState: ISetting = {};

export const settingReducer: any = createSlice({
  name: "setting",
  initialState,
  reducers: {
    changeTheme: (state, { payload }) => {
      state.dark_mode = payload;
    },
    activeNotification: (state, { payload }) => {
      state.notification = payload;
    },
    changeDisposition: (state, { payload }) => {
      state.disposition = payload;
    },
    changeFeedBy: (state, { payload }) => {
      state.feed_by = payload;
    },
    changeShowByPage: (state, { payload }) => {
      state.showByPage = payload;
    },
  },
});

export const settingAction: any = settingReducer.actions;

export default settingReducer.reducer;
