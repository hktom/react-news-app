import { IAuth, ILogin, IRegister } from "@/utils/interface";
import { createSlice } from "@reduxjs/toolkit";

interface IState {
  login?: ILogin;
  register?: IRegister;
  auth?: IAuth;
}

export const initialState: IState = {
  login: undefined,
  register: undefined,
  auth: undefined,
};

export const authReducer: any = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.login = payload.posts;
    },
    register: (state, { payload }) => {
      state.register = payload.posts;
    },
    auth: (state, { payload }) => {
      state.auth = payload.posts;
    },
  },
});

export const authAction: any = authReducer.actions;

export default authReducer.reducer;