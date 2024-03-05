import { CaseReducer } from "@reduxjs/toolkit";
import { CreateHandler, ITempUserSlice, IUserData } from "../../interface";

class CheckAndCreateTempUser
    implements
        CreateHandler<ITempUserSlice, { userData: IUserData }, { err: string }>
{
    pending: CaseReducer<
        ITempUserSlice,
        { payload: { userData: IUserData }; type: string }
    > = (state) => {
        state.isLoading = true;
        state.id = 0;
        state.uuid = "";
        state.cartId = 0;
    };

    fulfilled: CaseReducer<
        ITempUserSlice,
        { payload: { userData: IUserData }; type: string }
    > = (state, action) => {
        const { cart, user } = action.payload.userData;
        const {
            createdAt: createdAtUser,
            id: idCart,
            updatedAt: updatedAtUser,
            uuidTempUser,
        } = user;
        const {
            id,
            idTempUser,
            totalPriceEng,
            totalPriceRu,
            createdAt,
            updatedAt,
        } = cart;
        state.id = id;
        state.uuid = uuidTempUser;
        state.cartId = idCart;
        state.createdAt = createdAtUser;
        state.updatedAt = updatedAtUser;
        state.isError = false;
        state.isSuccess = true;
    };

    rejected: CaseReducer<ITempUserSlice> = (state, action) => {
        state.isError = true;
    };
}
