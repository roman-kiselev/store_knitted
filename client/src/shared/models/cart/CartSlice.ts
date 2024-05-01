import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { cartApi, tempUserApi } from "../../api";
import { ICartSlice } from "../../interface";
import AddCartId from "./AddCartId";
import AddPatternToCart from "./AddPatternToCart";
import DelPatternInCart from "./DelPatternInCart";
import GetFullCartById from "./GetFullCartById";

// Реализую функцию builder
export const delPatternInCartBuilder = (
    builder: ActionReducerMapBuilder<ICartSlice>
) => {
    builder.addMatcher(
        cartApi.endpoints.deletePatternFromCart.matchPending,
        DelPatternInCart.pending
    );
    builder.addMatcher(
        cartApi.endpoints.deletePatternFromCart.matchFulfilled,
        DelPatternInCart.fulfilled
    );
    builder.addMatcher(
        cartApi.endpoints.deletePatternFromCart.matchRejected,
        DelPatternInCart.rejected
    );
};

// interface ICartSlice {
//     id: number | null;
//     uuid: string | null;
//     patterns: IMasterClass[] | [];
//     total: number;
//     sumTotalRu: number;
//     sumTotalEng: number;
//     isLoading: boolean;
//     isError: boolean;
//     isSuccess: boolean;
// }

const initialState: ICartSlice = {
    patterns: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    uuid: "",
    idCart: 0,
    idTempUser: 0,
    messageError: "",
    totalPriceEng: 0,
    totalPriceRu: 0,
};

const cartSlice = createSlice({
    initialState,
    name: "cart",
    reducers: {
        // addMasterClass: (state, action: PayloadAction<IMasterClass>) => {
        //     const item = state.patterns.find(
        //         (item) => item.id === action.payload.id
        //     );
        //     if (!item) {
        //         state.patterns = [...state.patterns, action.payload];
        //         state.total = state.total + 1;
        //         state.sumTotalRu = state.sumTotalRu + action.payload.priceRu;
        //         state.sumTotalEng = state.sumTotalEng + action.payload.priceEng;
        //     }
        // },
        // delMasterClass: (state, action) => {
        //     const findedItem = state.patterns.find(
        //         (item) => item.id === action.payload
        //     );
        //     if (findedItem) {
        //         state.patterns = state.patterns.filter(
        //             (item) => item.id !== action.payload
        //         );
        //         state.total = state.total - 1;
        //         state.sumTotalRu = state.sumTotalRu - findedItem.priceRu;
        //         state.sumTotalEng = state.sumTotalEng - findedItem.priceEng;
        //     }
        // },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            tempUserApi.endpoints.checkTemporaryUser.matchPending,
            AddCartId.pending
        );
        builder.addMatcher(
            tempUserApi.endpoints.checkTemporaryUser.matchFulfilled,
            AddCartId.fulfilled
        );
        builder.addMatcher(
            tempUserApi.endpoints.checkTemporaryUser.matchRejected,
            AddCartId.rejected
        );
        // Получаем корзину по id
        builder.addMatcher(
            cartApi.endpoints.getCartById.matchPending,
            GetFullCartById.pending
        );
        builder.addMatcher(
            cartApi.endpoints.getCartById.matchFulfilled,
            GetFullCartById.fulfilled
        );
        builder.addMatcher(
            cartApi.endpoints.getCartById.matchRejected,
            GetFullCartById.rejected
        );
        // Добавляем в корзину
        builder.addMatcher(
            cartApi.endpoints.addPatternInCart.matchPending,
            AddPatternToCart.pending
        );
        builder.addMatcher(
            cartApi.endpoints.addPatternInCart.matchFulfilled,
            AddPatternToCart.fulfilled
        );
        builder.addMatcher(
            cartApi.endpoints.addPatternInCart.matchRejected,
            AddPatternToCart.rejected
        );
        // Удаление из корзины
        delPatternInCartBuilder(builder);
        // builder.addMatcher(
        //     cartApi.endpoints.deletePatternFromCart.matchPending,
        //     DelPatternInCart.pending
        // );
        // builder.addMatcher(
        //     cartApi.endpoints.deletePatternFromCart.matchFulfilled,
        //     DelPatternInCart.fulfilled
        // );
        // builder.addMatcher(
        //     cartApi.endpoints.deletePatternFromCart.matchRejected,
        //     DelPatternInCart.rejected
        // );
    },
});

export const {} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
