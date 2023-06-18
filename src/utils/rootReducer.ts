import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "../redux/feedReducer";

export const rootReducer = combineReducers({
  post: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
