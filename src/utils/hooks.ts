import { ThunkAction, Action } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import store from "../redux/store";
import { IReducer } from "./rootReducer";

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

//hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export interface IActionSaga {
  LOGIN?: string;
  LOGOUT?: string;
  UPDATE_PASSWORD?: string;
  GET_ITEM?: string;
  ADD_ITEM?: string;
  UPDATE_ITEM?: string;
  DELETE_ITEM?: string;
  STREAM_ITEM?: string;
}
