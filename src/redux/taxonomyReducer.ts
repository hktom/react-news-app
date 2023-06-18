import { ISetting, ITaxonomy, IUser } from "@/utils/interface";
import { createSlice } from "@reduxjs/toolkit";

export interface ITaxonomyState {
  taxonomies?: ITaxonomy[];
}

export const initialState: ITaxonomyState = {
  taxonomies: undefined,
};

export const taxonomyReducer: any = createSlice({
  name: "taxonomy",
  initialState,
  reducers: {
    addTaxonomy: (state, { payload }) => {
      state.taxonomies!.push(payload.taxonomy);
    },

    updateTaxonomy: (state, { payload }) => {
      const index = state.taxonomies!.findIndex(
        (item: ITaxonomy) => item.id === payload.taxonomy.id
      );
      state.taxonomies![index] = payload.taxonomy;
    },

    deleteTaxonomy: (state, { payload }) => {
      const index = state.taxonomies!.findIndex(
        (item: ITaxonomy) => item.id === payload.taxonomy.id
      );
      state.taxonomies!.splice(index, 1);
    },
  },
});

export const taxonomyAction: any = taxonomyReducer.actions;

export default taxonomyReducer.reducer;
