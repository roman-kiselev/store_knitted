import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMasterClass } from "../../interface";

interface ICartSlice {
    patterns: IMasterClass[] | [];
    total: number;
    sumTotalRu: number;
    sumTotalEng: number;
}

const initialState: ICartSlice = {
    patterns: [],
    total: 0,
    sumTotalRu: 0,
    sumTotalEng: 0,
};

const cartSlice = createSlice({
    initialState,
    name: "cart",
    reducers: {
        addMasterClass: (state, action: PayloadAction<IMasterClass>) => {
            const item = state.patterns.find(
                (item) => item.id === action.payload.id
            );
            if (!item) {
                state.patterns = [...state.patterns, action.payload];
                state.total = state.total + 1;

                state.sumTotalRu = state.sumTotalRu + action.payload.priceRu;
                state.sumTotalEng = state.sumTotalEng + action.payload.priceEng;
            }
        },
        delMasterClass: (state, action) => {
            const findedItem = state.patterns.find(
                (item) => item.id === action.payload
            );
            if (findedItem) {
                state.patterns = state.patterns.filter(
                    (item) => item.id !== action.payload
                );

                state.total = state.total - 1;
                state.sumTotalRu = state.sumTotalRu - findedItem.priceRu;
                state.sumTotalEng = state.sumTotalEng - findedItem.priceEng;
            }
        },
    },
    extraReducers: (builder) => {},
});

export const { addMasterClass, delMasterClass } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
