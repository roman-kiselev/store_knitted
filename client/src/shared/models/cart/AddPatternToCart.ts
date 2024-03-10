import { CaseReducer } from "@reduxjs/toolkit";
import { CreateHandler, ICart, ICartSlice } from "../../interface";

class AddPatternToCart
    implements
        CreateHandler<
            ICartSlice,
            ICart,
            { statusCode: number; message: string }
        >
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
        state.isError = false;
        state.patterns = action.payload.patterns;
        state.totalPriceEng = action.payload.totalPriceEng;
        state.totalPriceRu = action.payload.totalPriceRu;
    };
    rejected: CaseReducer<ICartSlice> = (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
    };
}

export default new AddPatternToCart();
