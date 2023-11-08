import { createSlice } from "@reduxjs/toolkit";

import { ICurrencySlice } from "../../interface";

const initialState: ICurrencySlice = {
    currency: "rub",
    defaultCurrency: "rub",
    сurrentCurrency: 97.7,
    isLoading: false,
    isError: false,
    message: "",
};

export const currencySlice = createSlice({
    initialState,
    name: "currency",
    reducers: {
        setCurrency: (state, action) => {
            state.currency = action.payload;
        },
    },
});

export const { setCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
