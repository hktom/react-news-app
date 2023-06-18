import { ISetting, ITaxonomy, IUser } from "@/utils/interface";
import { createSlice } from "@reduxjs/toolkit";

export interface ISettingState {
  settings?: ISetting;
}

export const initialState: ISettingState = {
  settings: undefined,
};

export const settingReducer: any = createSlice({
  name: "setting",
  initialState,
  reducers: {
    changeTheme: (state, { payload }) => {
      state.settings!.dark_mode = payload.status;
    },
    activeNotification: (state, { payload }) => {
      state.settings!.notification = payload.status;
    },
    changeDisposition: (state, { payload }) => {
      state.settings!.disposition = payload.status;
    },
    changeFeedBy: (state, { payload }) => {
      state.settings!.feed_by = payload.status;
    },
    changeShowByPage: (state, { payload }) => {
      state.settings!.showByPage = payload.status;
    },
  },
});

export const settingAction: any = settingReducer.actions;

export default settingReducer.reducer;
