import { combineReducers } from "@reduxjs/toolkit";
import feedReducer, { IFeedState } from "../redux/feedReducer";
import authReducer, { IAuthState } from "@/redux/authReducer";
import settingReducer from "@/redux/settingReducer";
import taxonomyReducer, { ITaxonomyState } from "@/redux/taxonomyReducer";
import userReducer, { IUserState } from "@/redux/userReducer";
import menuReducer, { IMenuState } from "@/redux/menuReducer";
import { ISetting } from "./interface";

export interface IReducer {
  feed: IFeedState;
  user: IUserState;
  taxonomy: ITaxonomyState;
  setting: ISetting;
  auth: IAuthState;
  menu: IMenuState;
}

export const rootReducer = combineReducers({
  feed: feedReducer,
  user: userReducer,
  taxonomy: taxonomyReducer,
  setting: settingReducer,
  auth: authReducer,
  menu: menuReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
