import { createSlice } from "@reduxjs/toolkit";

interface IState {
  posts: any;
  slider: any;
  banner: any;
  reservations: any;
  nanning: any;
  bottom: any;
}

export const initialState: IState = {
  posts: [],
  reservations: [],
  slider: [],
  banner: [],
  nanning: [],
  bottom: [],
};

const filterPost = (posts: any, index: string) => {
  if (!posts) return [];
  return posts.filter((post: any) => {
    return post.categories?.findIndex((cat: any) => cat.name == index) !== -1;
  });
};

export const postReducer: any = createSlice({
  name: "post",
  initialState,
  reducers: {
    getData: (state, { payload }) => {
      state.bottom = filterPost(payload.posts, "bottom");
      state.slider = filterPost(payload.posts, "slidershow");
      state.banner = filterPost(payload.posts, "banner");
      state.nanning = filterPost(payload.posts, "Nanning");
      state.posts = filterPost(payload.posts, "posts");
      state.reservations = payload.reservations || [];
    },
  },
});

export const postAction: any = postReducer.actions;

export default postReducer.reducer;
