import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../api";
import { IAuthSlice } from "../../interface";
import CheckHandler from "./CheckHandler";
import LoginHandler from "./LoginHandler";

const initialState: IAuthSlice = {
    isAuth: false,
    token: null,
    isLoading: false,
    isError: false,
    message: "",
};

export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            authApi.endpoints.login.matchPending,
            LoginHandler.pending
        );
        builder.addMatcher(
            authApi.endpoints.login.matchFulfilled,
            LoginHandler.fulfilled
        );
        builder.addMatcher(
            authApi.endpoints.login.matchRejected,
            LoginHandler.rejected
        );
        builder.addMatcher(
            authApi.endpoints.check.matchPending,
            CheckHandler.pending
        );
        builder.addMatcher(
            authApi.endpoints.check.matchFulfilled,
            CheckHandler.fulfilled
        );
        builder.addMatcher(
            authApi.endpoints.check.matchRejected,
            CheckHandler.rejected
        );
    },
});

export const authReducer = authSlice.reducer;
