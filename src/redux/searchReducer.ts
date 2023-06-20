import { IArticle, ITaxonomy } from "@/utils/interface";
import { createSlice } from "@reduxjs/toolkit";

export interface ISearchState {
  feeds: IArticle[];
  feeds_temp: IArticle[];
  categories: ITaxonomy[];
  sources: ITaxonomy[];
  loading: boolean;
  keywords: string;
  category: string;
  source: string;
  orderBy: string;
}

export const initialState: ISearchState = {
  feeds: [],
  feeds_temp: [],
  categories: [],
  sources: [],
  loading: false,
  keywords: "",
  category: "all",
  source: "all",
  orderBy: "newest",
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

    setCategory: (state, { payload }) => {
      state.category = payload;
    },

    setSource: (state, { payload }) => {
      state.source = payload;
    },

    setOrderBy: (state, { payload }) => {
      state.orderBy = payload;
    },

    filterByCategory: (state, { payload }) => {
      let data = [...state.feeds_temp];
      if (payload == "all" && state.source != "all") {
        state.feeds = filterBySource(data, state.source);
      } else {
        state.feeds = filterByCategory(data, payload);
      }
    },

    filterBySource: (state, { payload }) => {
      let data = [...state.feeds_temp];
      if (payload == "all" && state.category != "all") {
        state.feeds = filterByCategory(data, state.category);
      } else {
        state.feeds = filterBySource(data, payload);
      }
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
      let data: any = [{ id: "all", name: "All Categories" }];
      payload.forEach((item: any) => {
        if (item.category_name && existingCategoryIndex(data, item) < 0) {
          data.push({ id: item.category_name, name: item.category_name });
        }
      });

      state.categories = data;
    },

    setSources: (state, { payload }) => {
      let data: any = [{ id: "all", name: "All Sources" }];
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

const filterByCategory = (data: any, category: any) => {
  return data.filter((item: any) => {
    if (category != "all") {
      return item.category_name == category;
    }
    return true;
  });
};

const filterBySource = (data: any, source: any) => {
  return data.filter((item: any) => {
    if (source != "all") {
      return item.source_name == source;
    }
    return true;
  });
};

const existingSourceIndex = (data: any, item: any) =>
  data.findIndex((i: any) => i.name == item.source_name);

const existingCategoryIndex = (data: any, item: any) =>
  data.findIndex((i: any) => i.name == item.category_name);

export const searchAction: any = searchReducer.actions;

export default searchReducer.reducer;
