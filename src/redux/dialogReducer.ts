import { createSlice } from "@reduxjs/toolkit";

export interface IDialogState {
  open: boolean;
  page: number;
}

export const initialState: IDialogState = {
  open: false,
  page: 0,
};

export const dialogReducer: any = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openDialog: (state, { payload }) => {
      state.open = payload;
    },

    closeDialog: (state, { payload }) => {
      state.open = payload;
    },

    changePage: (state, { payload }) => {
      state.page = payload;
    },
  },
});

export const dialogAction: any = dialogReducer.actions;

export default dialogReducer.reducer;
