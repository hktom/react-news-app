import { createSlice } from "@reduxjs/toolkit";

export interface IMenuState {
  is_drawer_open: boolean;
  active_menu: string;
  home_tab: number;
}

export const initialState: IMenuState = {
  is_drawer_open: true,
  active_menu: "me",
  home_tab: 0,
};

export const menuReducer: any = createSlice({
  name: "menu",
  initialState,
  reducers: {
    changeHomeTab: (state, { payload }) => {
      state.home_tab = payload;
    },
    openDrawer: (state, { payload }) => {
      state.is_drawer_open = payload;
    },
    setActiveMenu: (state, { payload }) => {
      state.active_menu = payload;
    },
  },
});

export const menuAction: any = menuReducer.actions;

export default menuReducer.reducer;
