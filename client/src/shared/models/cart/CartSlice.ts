import { createSlice } from "@reduxjs/toolkit";
import { tempUserApi } from "../../api";
import { ICartSlice } from "../../interface";

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
            (state) => {
                state.isLoading = true;
                state.isError = false;
            }
        );
        builder.addMatcher(
            tempUserApi.endpoints.checkTemporaryUser.matchFulfilled,
            (state, action) => {
                const { cart, user } = action.payload.userData;
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.idCart = cart.id;
                state.uuid = user.uuidTempUser;
                state.totalPriceRu = cart.totalPriceRu;
                state.totalPriceEng = cart.totalPriceEng;
            }
        );
        builder.addMatcher(
            tempUserApi.endpoints.checkTemporaryUser.matchRejected,
            (state) => {
                state.isLoading = false;
                state.isError = true;
            }
        );
    },
});

export const {} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
