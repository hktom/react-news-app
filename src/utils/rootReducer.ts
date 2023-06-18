import { combineReducers } from "@reduxjs/toolkit";
import feedReducer from "../redux/feedReducer";
import authReducer from "@/redux/authReducer";
import settingReducer from "@/redux/settingReducer";
import taxonomyReducer from "@/redux/taxonomyReducer";
import userReducer from "@/redux/userReducer";

export const rootReducer = combineReducers({
  feed: feedReducer,
  user: userReducer,
  taxonomy: taxonomyReducer,
  setting: settingReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
