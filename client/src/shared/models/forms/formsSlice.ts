import { createSlice } from "@reduxjs/toolkit";
import { IFormsSlice } from "../../interface";

const initialState: IFormsSlice = {
    createPattern: null,
    isError: false,
    isLoading: false,
    message: "",
};

export const formSlice = createSlice({
    initialState,
    name: "form",
    reducers: {},
});

export const formReducer = formSlice.reducer;
