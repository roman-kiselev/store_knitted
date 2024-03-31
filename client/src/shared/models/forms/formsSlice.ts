import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { masterClassApi } from "../../api";
import { IFormsSlice, IParamsPattern } from "../../interface";

const initialState: IFormsSlice = {
    createPattern: {
        nameEng: "",
        nameRu: "",
        params: [],
        priceRu: 0,
        priceEng: 0,
    },
    editPattern: null,
    isError: false,
    isLoading: false,
    message: "",
};

export const formSlice = createSlice({
    initialState,
    name: "form",
    reducers: {
        editNameEng: (state, action) => {
            state.createPattern.nameEng = action.payload;
        },
        editNameRu: (state, action) => {
            state.createPattern.nameRu = action.payload;
        },
        editPriceRu: (state, action) => {
            state.createPattern.priceRu = action.payload;
        },
        editPriceEng: (state, action) => {
            state.createPattern.priceEng = action.payload;
        },
        pushParams: (state) => {
            state.createPattern.params = [
                ...state.createPattern.params,
                {
                    index: state.createPattern.params.length + 1,
                    nameEng: "",
                    nameRu: "",
                },
            ];
        },
        editParams: (state, action: PayloadAction<IParamsPattern>) => {
            const { index } = action.payload;
            const findedIndex = state.createPattern.params?.findIndex(
                (item) => item.index === index
            );
            if (state.createPattern.params !== null) {
                state.createPattern.params[findedIndex].nameRu =
                    action.payload.nameRu;
                state.createPattern.params[findedIndex].nameEng =
                    action.payload.nameEng;
            }
        },
        delRowParams: (state, action: PayloadAction<number>) => {
            const index = action.payload;
            if (state.createPattern.params !== null) {
                let newArr = state.createPattern.params.filter(
                    (item) => item.index !== index
                );
                state.createPattern.params = newArr.map((item, index) => {
                    return {
                        ...item,
                        index: index + 1,
                    };
                });
            }
        },
        resetDataPattern: (state) => {
            state.createPattern = {
                nameEng: "",
                nameRu: "",
                params: [],
                priceRu: 0,
                priceEng: 0,
            };
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            masterClassApi.endpoints.getOneMasterClass.matchFulfilled,
            (state, action) => {
                state.createPattern.nameEng = action.payload.nameEng;
                state.createPattern.nameRu = action.payload.nameRu;
                state.createPattern.priceEng = action.payload.priceEng;
                state.createPattern.priceRu = action.payload.priceRu;
                const params = action.payload.params.map((item, index) => {
                    return {
                        index: index,
                        nameRu: item.valueRu,
                        nameEng: item.valueEng,
                    } as IParamsPattern;
                });
                state.createPattern.params = params;
            }
        );
    },
});

export const {
    editNameEng,
    editNameRu,
    editPriceRu,
    editPriceEng,
    pushParams,
    editParams,
    delRowParams,
    resetDataPattern,
} = formSlice.actions;

export const formReducer = formSlice.reducer;
