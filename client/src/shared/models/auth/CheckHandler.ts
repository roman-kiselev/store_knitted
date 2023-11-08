import { CaseReducer } from "@reduxjs/toolkit";
import { CreateHandler, IAuthSlice } from "../../interface";

class CheckHandler
    implements
        CreateHandler<IAuthSlice, { token: string }, { message: string }>
{
    pending: CaseReducer<IAuthSlice> = (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = "";
    };
    fulfilled: CaseReducer<
        IAuthSlice,
        { payload: { token: string }; type: string }
    > = (state, action) => {
        state.isAuth = true;
        state.token = action.payload.token;
        state.isLoading = false;
    };
    rejected: CaseReducer<IAuthSlice> = (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
    };
}

export default new CheckHandler();
