import { createSlice } from "@reduxjs/toolkit";
import { ILanguageSlice } from "../../interface";

const initialState: ILanguageSlice = {
    language: "ru",
    defaultLanguage: "ru",
    isLoading: false,
    isError: false,
    message: "",
};

export const languageSlice = createSlice({
    initialState,
    name: "language",
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
});

export const { setLanguage } = languageSlice.actions;
export const languageReducer = languageSlice.reducer;
