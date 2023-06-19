import { IArticle } from "@/utils/interface";
import { createSlice } from "@reduxjs/toolkit";

export interface IFeedState {
  articles: IArticle[];
  favorites: IArticle[];
  readLater: IArticle[];
  alreadyRead: IArticle[];
  article?: IArticle;
}

export const initialState: IFeedState = {
  articles: [],
  favorites: [],
  readLater: [],
  alreadyRead: [],
  article: undefined,
};

export const feedReducer: any = createSlice({
  name: "feed",
  initialState,
  reducers: {
    getData: (state, { payload }) => {
      state.articles = payload.posts;
    },
    showArticle: (state, { payload }) => {
      state.article = payload;
    },
    addTo: (state, { payload }) => {
      switch (payload.type) {
        case "readLater":
          state.readLater.push(payload);
          break;
        case "favorites":
          state.favorites.push(payload);
          break;

        case "alreadyRead":
          state.alreadyRead.push(payload);
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
