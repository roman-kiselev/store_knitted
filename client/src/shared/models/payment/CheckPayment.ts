import { CaseReducer } from "@reduxjs/toolkit";
import { CreateHandler, IPaymentSlice } from "../../interface";

class CheckPayment implements CreateHandler<IPaymentSlice, any, any> {
    pending: CaseReducer<IPaymentSlice> = (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
    };
    fulfilled: CaseReducer<IPaymentSlice, { payload: any; type: string }> = (
        state,
        action
    ) => {
        if (action.payload !== null) {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.email = action.payload.email;
        }
    };
    rejected: CaseReducer<IPaymentSlice> = (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
    };
}

export default new CheckPayment();
