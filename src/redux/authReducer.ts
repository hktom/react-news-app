import { IAuth, ILogin, IRegister } from "@/utils/interface";
import { createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
  login?: ILogin;
  register?: IRegister;
  auth?: IAuth;
}

export const initialState: IAuthState = {
  login: undefined,
  register: undefined,
  auth: undefined,
};

export const authReducer: any = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.login = payload;
    },
    register: (state, { payload }) => {
      state.register = payload;
    },
    auth: (state, { payload }) => {
      state.auth = payload;
    },
  },
});

export const authAction: any = authReducer.actions;

export default authReducer.reducer;
