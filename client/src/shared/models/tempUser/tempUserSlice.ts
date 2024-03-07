import { createSlice } from "@reduxjs/toolkit";
import { tempUserApi } from "../../api";
import { ITempUserSlice } from "../../interface";
import CheckAndCreateTempUser from "./CheckAndCreateTempUser";

const initialState: ITempUserSlice = {
    id: 0,
    cartId: 0,
    createdAt: null,
    updatedAt: null,
    uuid: "",
    isLoading: false,
    isSuccess: false,
    isError: false,
};

export const tempUserSlice = createSlice({
    name: "tempUser",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            tempUserApi.endpoints.checkTemporaryUser.matchPending,
            CheckAndCreateTempUser.pending
        );
        builder.addMatcher(
            tempUserApi.endpoints.checkTemporaryUser.matchFulfilled,
            CheckAndCreateTempUser.fulfilled
        );
        builder.addMatcher(
            tempUserApi.endpoints.checkTemporaryUser.matchRejected,
            CheckAndCreateTempUser.rejected
        );
    },
});

export const tempUserReducer = tempUserApi.reducer;
