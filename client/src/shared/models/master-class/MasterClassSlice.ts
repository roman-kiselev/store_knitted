import { createSlice } from "@reduxjs/toolkit";
import { masterClassApi } from "../../api";
import { IMasterClassSlice } from "../../interface";
import GetAllMasterClass from "./GetAllMasterClass";

const initialState: IMasterClassSlice = {
    masterClass: [],
    currentPage: 1,
    totalCount: 0,
    pageSize: 1,
    isLoading: false,
    isError: false,
    message: "",
};

export const masterClassSlice = createSlice({
    initialState,
    name: "masterClass",
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
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
export const { setCurrentPage } = masterClassSlice.actions;
