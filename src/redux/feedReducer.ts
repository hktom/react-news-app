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
    toggleLoading: (state, { payload }) => {
      state.loading = payload;
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
          if (
            state.readLater.find(
              (item: IArticle) => item.url === payload.article.url
            )
          )
            return;
          state.readLater.push(payload.article);
          break;
        case "favorites":
          if (
            state.favorites.find(
              (item: IArticle) => item.url === payload.article.url
            )
          )
            return;
          state.favorites.push(payload.article);
          break;

        case "alreadyRead":
          if (
            state.alreadyRead.find(
              (item: IArticle) => item.url === payload.article.url
            )
          )
            return;
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
