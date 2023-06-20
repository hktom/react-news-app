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
  category: "",
  source: "",
  orderBy: "",
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
      state.category = payload.category;
      state.source = payload.source;
      state.orderBy = payload.orderBy;

      let data = [...state.feeds_temp];
      data = filterBySource(data, payload.source);
      data = filterByCategory(data, payload.category);

      if (payload.orderBy == "newest") {
        state.feeds = orderByNewest(data);
      } else if (state.orderBy == "oldest") {
        state.feeds = orderByOldest(data);
      } else {
        state.feeds = data;
      }
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

const orderByNewest = (data: any) => {
  return data.sort((a: any, b: any) => {
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });
};

const orderByOldest = (data: any) => {
  return data.sort((a: any, b: any) => {
    return (
      new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
    );
  });
};

const filterByCategory = (data: any, category: any) => {
  return data.filter((item: any) => {
    if (category != "all" && category) {
      return item.category_name == category;
    }
    return true;
  });
};

const filterBySource = (data: any, source: any) => {
  return data.filter((item: any) => {
    if (source != "all" && source) {
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
