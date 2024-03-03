import { CaseReducer } from "@reduxjs/toolkit";
import { CreateHandler, IPaymentSlice } from "../../interface";

class CreatePayment implements CreateHandler<IPaymentSlice, any, any> {
    pending: CaseReducer<IPaymentSlice> = (state, action) => {
        state.isLoading = true;
    };

    fulfilled: CaseReducer<IPaymentSlice, { payload: any; type: string }> = (
        state,
        action
    ) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
    };
    rejected: CaseReducer<IPaymentSlice> = (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
    };
}

export default new CreatePayment();
