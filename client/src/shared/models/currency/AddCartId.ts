import { CaseReducer } from "@reduxjs/toolkit";
import { CreateHandler, ICartSlice, IUserDataPayload } from "../../interface";

class AddCartId
    implements CreateHandler<ICartSlice, IUserDataPayload, { err: string }>
{
    pending: CaseReducer<ICartSlice> = (state) => {
        state.isLoading = true;
        state.isError = false;
    };
    fulfilled: CaseReducer<
        ICartSlice,
        { payload: IUserDataPayload; type: string }
    > = (state, action) => {
        const { cart, user } = action.payload.userData;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.idCart = cart.id;
        state.uuid = user.uuidTempUser;
        state.totalPriceRu = cart.totalPriceRu;
        state.totalPriceEng = cart.totalPriceEng;
    };
    rejected: CaseReducer<ICartSlice> = (state) => {
        state.isLoading = false;
        state.isError = true;
    };
}

export default new AddCartId();
