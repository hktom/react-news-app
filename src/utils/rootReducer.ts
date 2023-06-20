import { combineReducers } from "@reduxjs/toolkit";
import feedReducer, { IFeedState } from "../redux/feedReducer";
import authReducer, { IAuthState } from "@/redux/authReducer";
import settingReducer from "@/redux/settingReducer";
import taxonomyReducer, { ITaxonomyState } from "@/redux/taxonomyReducer";
import userReducer, { IUserState } from "@/redux/userReducer";
import menuReducer, { IMenuState } from "@/redux/menuReducer";
import { ISetting } from "./interface";
import searchReducer, { ISearchState } from "@/redux/searchReducer";
import dialogReducer, { IDialogState } from "@/redux/dialogReducer";

export interface IReducer {
  feed: IFeedState;
  user: IUserState;
  taxonomy: ITaxonomyState;
  setting: ISetting;
  auth: IAuthState;
  menu: IMenuState;
  search: ISearchState;
  dialog: IDialogState;
}

export const rootReducer = combineReducers({
  feed: feedReducer,
  user: userReducer,
  taxonomy: taxonomyReducer,
  setting: settingReducer,
  auth: authReducer,
  menu: menuReducer,
  search: searchReducer,
  dialog: dialogReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
