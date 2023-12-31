import { ISetting, ITaxonomy, IUser } from "@/utils/interface";
import { createSlice } from "@reduxjs/toolkit";

export interface IUserState {
  user?: IUser;
}

export const initialState: IUserState = {
  user: undefined,
};

export const userReducer: any = createSlice({
  name: "user",
  initialState,
  reducers: {
    setData: (state, { payload }) => {
      state.user = payload;
    },
    updateProfile: (state, { payload }) => {
      state.user!.id = payload.user?.id;
      state.user!.name = payload.user?.name;
      state.user!.email = payload.user?.email;
      state.user!.avatar = payload.user?.avatar;
    },
  },
});

export const userAction: any = userReducer.actions;

export default userReducer.reducer;
