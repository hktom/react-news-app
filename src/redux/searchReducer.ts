import { IArticle, ITaxonomy } from "@/utils/interface";
import { createSlice } from "@reduxjs/toolkit";

export interface ISearchState {
  feeds: IArticle[];
  feeds_temp: IArticle[];
  categories: ITaxonomy[];
  sources: ITaxonomy[];
  loading: boolean;
  keywords: string;
}

export const initialState: ISearchState = {
  feeds: [],
  feeds_temp: [],
  categories: [],
  sources: [],
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
          return item.category_name == payload.name;
        if (payload.type == "source") return item.source_name == payload.name;
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

    setCategories: (state, { payload }) => {
      let data: any = [{ id: "0", name: "All Categories" }];
      payload.forEach((item: any) => {
        if (item.category_name && existingCategoryIndex(data, item) < 0) {
          data.push({ id: item.category_name, name: item.category_name });
        }
      });

      state.categories = data;
    },

    setSources: (state, { payload }) => {
      let data: any = [{ id: "0", name: "All Sources" }];
      payload.forEach((item: any) => {
        if (item.source_name && existingSourceIndex(data, item) < 0) {
          data.push({ id: item.source_name, name: item.source_name });
        }
      });

      state.sources = data;
    },

    toggleLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

const existingSourceIndex = (data: any, item: any) =>
  data.findIndex((i: any) => i.name == item.source_name);

const existingCategoryIndex = (data: any, item: any) =>
  data.findIndex((i: any) => i.name == item.category_name);

export const searchAction: any = searchReducer.actions;

export default searchReducer.reducer;
