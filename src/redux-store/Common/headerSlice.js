import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    mainMenu: [],
    footerMenu: [],
    footerCategory: [],
};

export const counterSlice = createSlice({
    name: "header",
    initialState,
    reducers: {
        storeCategories: (state, action) => {
            state.categories = action.payload;
        },
        storeMainMenu: (state, action) => {
            state.mainMenu = action.payload;
        },
        storeFooterMenu: (state, action) => {
            state.footerMenu = action.payload;
        },
        storeFooterCategory: (state, action) => {
            state.footerCategory = action.payload;
        }
    },
});

// Action creators are generated for each case reducer function
export const { storeCategories, storeMainMenu, storeFooterCategory, storeFooterMenu } =
    counterSlice.actions;

export default counterSlice.reducer;