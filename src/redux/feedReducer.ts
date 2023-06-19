import { IArticle } from "@/utils/interface";
import { createSlice } from "@reduxjs/toolkit";

export interface IFeedState {
  myFeed: IArticle[];
  exploreFeed: IArticle[];
  favorites: IArticle[];
  readLater: IArticle[];
  alreadyRead: IArticle[];
  article?: IArticle;
  loading: boolean;
}

export const initialState: IFeedState = {
  myFeed: [],
  exploreFeed: [],
  favorites: [],
  readLater: [],
  alreadyRead: [],
  article: undefined,
  loading: false,
};

export const feedReducer: any = createSlice({
  name: "feed",
  initialState,
  reducers: {
    toggleLoading: (state) => {
      state.loading = !state.loading;
    },
    getData: (state, { payload }) => {
      state.myFeed = payload.myFeed;
      state.exploreFeed = payload.exploreFeed;
    },
    showArticle: (state, { payload }) => {
      state.article = payload;
    },
    addTo: (state, { payload }) => {
      switch (payload.type) {
        case "readLater":
          state.readLater.push(payload.article);
          break;
        case "favorites":
          state.favorites.push(payload.article);
          break;

        case "alreadyRead":
          state.alreadyRead.push(payload.article);
          break;

        default:
          break;
      }
    },

    removeFrom: (state, { payload }) => {
      switch (payload.type) {
        case "readLater":
          state.readLater = state.readLater.filter(
            (item: IArticle) => item.id !== payload.id
          );
          break;
        case "favorites":
          state.readLater = state.readLater.filter(
            (item: IArticle) => item.id !== payload.id
          );
          break;

        case "alreadyRead":
          state.readLater = state.readLater.filter(
            (item: IArticle) => item.id !== payload.id
          );
          break;

        default:
          break;
      }
    },
  },
});

export const feedAction: any = feedReducer.actions;

export default feedReducer.reducer;
