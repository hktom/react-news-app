import { createSlice } from "@reduxjs/toolkit";

export interface IMenuState {
  is_drawer_open: boolean;
  active_menu: string;
}

export const initialState: IMenuState = {
  is_drawer_open: true,
  active_menu: "me",
};

export const menuReducer: any = createSlice({
  name: "menu",
  initialState,
  reducers: {
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
