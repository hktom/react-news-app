import { IArticle, ITaxonomy } from "@/utils/interface";
import { createSlice } from "@reduxjs/toolkit";

export interface ISearchState {
  feeds: IArticle[];
  feeds_temp: IArticle[];
  filters: ITaxonomy[];
  loading: boolean;
  keywords: string;
}

export const initialState: ISearchState = {
  feeds: [],
  feeds_temp: [],
  filters: [],
  loading: false,
  keywords: "",
};

export const searchReducer: any = createSlice({
  name: "search",
  initialState,
  reducers: {
    saveKeywords: (state, { payload }) => {
      state.keywords = payload;
    },
    setFeeds: (state, { payload }) => {
      state.feeds = payload;
      state.feeds_temp = payload;
    },

    filter: (state, { payload }) => {
      state.feeds = [...state.feeds].filter((item: any) => {
        if (payload.type == "category")
          return (
            item.category_id == payload.id || item.category_name == payload.name
          );
        if (payload.type == "source")
          return (
            item.source_id == payload.id || item.source_name == payload.name
          );
      });
    },

    orderByNewest: (state, { payload }) => {
      state.feeds = [...state.feeds].sort((a: any, b: any) => {
        return (
          new Date(b.published_at).getTime() -
          new Date(a.published_at).getTime()
        );
      });
    },

    orderByOldest: (state, { payload }) => {
      state.feeds = [...state.feeds].sort((a: any, b: any) => {
        return (
          new Date(a.published_at).getTime() -
          new Date(b.published_at).getTime()
        );
      });
    },

    setFilters: (state, { payload }) => {
      let data: any = [];
      payload.forEach((item: any) => {
        data.push(
          {
            id: item.source_id,
            name: item.source_name,
            slug: item.source_id,
            type: "source",
          },
          //   {
          //     id: item.author_id,
          //     name: item.author_name,
          //     slug: item.author_sid,
          //     type: "author",
          //   },
          {
            id: item.category_id,
            name: item.category_name,
            slug: item.category_id,
            type: "category",
          }
        );
      });
      state.filters = data;
    },

    toggleLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

export const searchAction: any = searchReducer.actions;

export default searchReducer.reducer;
