import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData: Array(1).fill({}),
  bestSellingData:  Array(5).fill({}),
  featuredProductData:  Array(5).fill({}),
  featuredCategoryProductData: Array(5).fill({}),
  homeAdsData:  Array(4).fill({}),
  homeBlogData: Array(4).fill({}),
  homeTestimonialData:  Array(1).fill({})
};


export const counterSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    storeBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
    storeBestSellingData: (state, action) => {
      state.bestSellingData = action.payload;
    },
    storeFeaturedProductData: (state, action) => {
      state.featuredProductData = action.payload;
    },
    storeFeaturedCategoryProductData: (state, action) => {
      state.featuredCategoryProductData = action.payload;
    },
    storeHomeAdsData: (state, action) => {
      state.homeAdsData = action.payload;
    },
    storeHomeBlogData: (state, action) => {
      state.homeBlogData = action.payload;
    },
    storeHomeTestimonialData: (state, action) => {
      state.homeTestimonialData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeBannerData, storeBestSellingData, storeFeaturedProductData, storeFeaturedCategoryProductData, storeHomeAdsData, storeHomeBlogData, storeHomeTestimonialData } =
  counterSlice.actions;

export default counterSlice.reducer;