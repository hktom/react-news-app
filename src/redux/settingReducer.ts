import { ISetting, ITaxonomy, IUser } from "@/utils/interface";
import { createSlice } from "@reduxjs/toolkit";

export const initialState: ISetting = {};

export const settingReducer: any = createSlice({
  name: "setting",
  initialState,
  reducers: {
    toggleLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setSetting: (state, { payload }) => {
      state.dark_mode = payload.dark_mode;
      state.notification = payload.notification;
      state.showByPage = payload.showByPage;
      state.feed_by = payload.feed_by;
      state.disposition = payload.disposition;
    },
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
