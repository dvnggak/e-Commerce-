import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        // GET AND FETCH ALL PRODUCTS
        getProductStart: (state) => {
            state.isFetching = true;
            state.error =  false;
        },
        getProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products = action.payload;
        },
        getProductFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;;
        },
        // DELETE PRODUCTS
        deleteProductStart: (state) => {
            state.isFetching = true;
            state.error =  false;
        },
        deleteProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.splice(
                state.products.findIndex(
                    (item) => item._id === action.payload.id
                ),1
            );
        },
        deleteProductFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;;
        },
    },
});

export const { getProductStart, getProductSuccess, getProductFailure } = productSlice.actions;

export default productSlice.reducer;


