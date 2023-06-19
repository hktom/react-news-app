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
      state.feeds = payload.filter((item: any) => {
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

    setCategories: (state, { payload }) => {
      let data: any = [];
      payload.forEach((item: any) => {
        if (existingCategoryIndex(data, item) < 0) {
          data.push({
            id: item.category_id,
            name: item.category_name,
            slug: item.category_id,
            type: "category",
          });
        }
      });

      state.categories = data;
    },

    setSources: (state, { payload }) => {
      let data: any = [];
      payload.forEach((item: any) => {
        if (existingSourceIndex(data, item) < 0) {
          data.push({
            id: item.source_id,
            name: item.source_name,
            slug: item.source_id,
            type: "source",
          });
        }
      });

      state.sources = data;
    },

    // setFilters: (state, { payload }) => {
    //   // let data: any = [];
    //   // payload.forEach((item: any) => {
    //   //   // console.log(data, existingSourceIndex(data, item), existingCategoryIndex(data, item));
    //   //   console.log(
    //   //     "masuk",
    //   //     item,
    //   //     item.type,
    //   //     existingSourceIndex(data, item) < 0,
    //   //     item.type == "source" && existingSourceIndex(data, item) < 0
    //   //   );
    //   //   if (item.type == "source" && existingSourceIndex(data, item) < 0) {
    //   //     data.push({
    //   //       id: item.source_id,
    //   //       name: item.source_name,
    //   //       slug: item.source_id,
    //   //       type: "source",
    //   //     });
    //   //   }
    //   //   if (item.type == "category" && existingCategoryIndex(data, item) < 0) {
    //   //     data.push({
    //   //       id: item.category_id,
    //   //       name: item.category_name,
    //   //       slug: item.category_id,
    //   //       type: "category",
    //   //     });
    //   //   }
    //   // });
    //   // state.filters = data;
    // },

    toggleLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

const existingSourceIndex = (data: any, item: any) =>
  data.findIndex(
    (i: any) => i.id == item.source_id && i.name == item.source_name
  );

const existingCategoryIndex = (data: any, item: any) =>
  data.findIndex(
    (i: any) => i.id == item.category_id && i.name == item.category_name
  );

export const searchAction: any = searchReducer.actions;

export default searchReducer.reducer;
