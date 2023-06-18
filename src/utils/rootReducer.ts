import { combineReducers } from "@reduxjs/toolkit";
import feedReducer, { IFeedState } from "../redux/feedReducer";
import authReducer, { IAuthState } from "@/redux/authReducer";
import settingReducer, { ISettingState } from "@/redux/settingReducer";
import taxonomyReducer, { ITaxonomyState } from "@/redux/taxonomyReducer";
import userReducer, { IUserState } from "@/redux/userReducer";

export interface IReducer {
  feed: IFeedState;
  user: IUserState;
  taxonomy: ITaxonomyState;
  setting: ISettingState;
  auth: IAuthState;
}

export const rootReducer = combineReducers({
  feed: feedReducer,
  user: userReducer,
  taxonomy: taxonomyReducer,
  setting: settingReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
