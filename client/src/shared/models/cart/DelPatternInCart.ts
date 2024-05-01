import { CaseReducer } from "@reduxjs/toolkit";
import { CreateHandler, ICart, ICartSlice } from "../../interface";

class DelPatternInCart
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
        state.isError = false;
        const { patterns } = action.payload;
        const { totalPriceEng, totalPriceRu } = action.payload;
        state.patterns = patterns;
        state.totalPriceEng = totalPriceEng;
        state.totalPriceRu = totalPriceRu;
    };

    rejected: CaseReducer<ICartSlice> = (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
    };
}

export default new DelPatternInCart();
