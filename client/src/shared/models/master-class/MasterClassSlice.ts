import { createSlice } from "@reduxjs/toolkit";
import { masterClassApi } from "../../api";
import { IMasterClassSlice } from "../../interface";
import GetAllMasterClass from "./GetAllMasterClass";

const initialState: IMasterClassSlice = {
    masterClass: [],
    isLoading: false,
    isError: false,
    message: "",
};

export const masterClassSlice = createSlice({
    initialState,
    name: "masterClass",
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            masterClassApi.endpoints.getAllMasterClass.matchPending,
            GetAllMasterClass.pending
        );
        builder.addMatcher(
            masterClassApi.endpoints.getAllMasterClass.matchFulfilled,
            GetAllMasterClass.fulfilled
        );
        builder.addMatcher(
            masterClassApi.endpoints.getAllMasterClass.matchRejected,
            GetAllMasterClass.rejected
        );
    },
});

export const masterClassReducer = masterClassSlice.reducer;
export {};
