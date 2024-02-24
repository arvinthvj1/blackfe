import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./Common/headerSlice";
import homeReducer from "./Home/homeSlice";

export const store = configureStore({
  reducer: {
    headerData : headerReducer,
    homeData: homeReducer,
  },
});