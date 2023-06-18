import { IArticle } from "@/utils/interface";
import { createSlice } from "@reduxjs/toolkit";

interface IState {
  articles: IArticle[];
}

export const initialState: IState = {
  articles: [],
};

export const feedReducer: any = createSlice({
  name: "feed",
  initialState,
  reducers: {
    getData: (state, { payload }) => {
      state.articles = payload.posts;
    },
    readLater: (state, { payload }) => {
      const index = state.articles.findIndex(
        (item: IArticle) => item.id === payload.id
      );
      state.articles[index].read_later = payload.status;
    },

    bookmarked: (state, { payload }) => {
      const index = state.articles.findIndex(
        (item: IArticle) => item.id === payload.id
      );
      state.articles[index].favorites = payload.status;
    },

    alreadyRead: (state, { payload }) => {
      const index = state.articles.findIndex(
        (item: IArticle) => item.id === payload.id
      );
      state.articles[index].already_read = payload.status;
    },
  },
});

export const feedAction: any = feedReducer.actions;

export default feedReducer.reducer;
