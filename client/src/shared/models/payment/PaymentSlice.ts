import { createSlice } from "@reduxjs/toolkit";
import { paymentApi } from "../../api/payment";
import { IPaymentSlice } from "../../interface";
import CreatePayment from "./CreatePayment";

const initialState: IPaymentSlice = {
    email: "",
    amount: "",
    status: false,
    isSuccess: false,
    isError: false,
    isLoading: false,
};

export const paymentSlice = createSlice({
    initialState,
    name: "paymentSlice",
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            paymentApi.endpoints.createPayment.matchPending,
            CreatePayment.pending
        );
        builder.addMatcher(
            paymentApi.endpoints.createPayment.matchFulfilled,
            CreatePayment.fulfilled
        );
        builder.addMatcher(
            paymentApi.endpoints.createPayment.matchRejected,
            CreatePayment.rejected
        );
    },
});

export const paymentReducer = paymentSlice.reducer;
