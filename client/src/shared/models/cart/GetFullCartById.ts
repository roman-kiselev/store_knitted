import { CaseReducer } from "@reduxjs/toolkit";
import { CreateHandler, ICart, ICartSlice } from "../../interface";

class GetFullCartById
    implements CreateHandler<ICartSlice, ICart, { err: string }>
{
    pending: CaseReducer<ICartSlice> = (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
    };

    fulfilled: CaseReducer<ICartSlice, { payload: ICart; type: string }> = (
        state,
        action
    ) => {
        state.isLoading = false;
        state.isSuccess = true;
        if (action.payload !== null) {
            state.patterns = action.payload.patterns;
            state.idTempUser = action.payload.idTempUser;
        }
    };

    rejected: CaseReducer<ICartSlice> = (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
    };
}

export default new GetFullCartById();
