import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "../redux/reducer";

export const rootReducer = combineReducers({
  post: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
