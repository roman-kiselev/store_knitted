import { createSlice, current } from "@reduxjs/toolkit";
import { masterClassApi } from "../../api";
import { IMasterClassSlice } from "../../interface";
import FindNamePlusGetAll from "./FindNamePlusGetAll";
import GetAllMasterClass from "./GetAllMasterClass";

interface IFindAction {
    name: string;
    language: string;
}

const initialState: IMasterClassSlice = {
    masterClass: [],
    currentPage: 1,
    totalCount: 0,
    pageSize: 6,
    isLoading: false,
    isError: false,
    message: "",
};

export const masterClassSlice = createSlice({
    initialState,
    name: "masterClass",
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        findMasterClass: (
            state,
            action: { payload: IFindAction; type: string }
        ) => {
            if (action.payload.language === "ru") {
                const newArr = current(state.masterClass).filter((item) =>
                    item.nameRu
                        .toLowerCase()
                        .startsWith(action.payload.name.toLowerCase())
                );

                state.masterClass = newArr;
            } else if (action.payload.language === "en") {
                const newArr = current(state.masterClass).filter((item) =>
                    item.nameEng
                        .toLowerCase()
                        .startsWith(action.payload.name.toLowerCase())
                );

                state.masterClass = newArr;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            masterClassApi.endpoints.getAllMasterClass.matchPending,
            GetAllMasterClass.pending
        );
        builder.addMatcher(
            masterClassApi.endpoints.getAllMasterClass.matchFulfilled,
            GetAllMasterClass.fulfilled
        );
        builder.addMatcher(
            masterClassApi.endpoints.getAllMasterClass.matchRejected,
            GetAllMasterClass.rejected
        );

        // Поиск
        builder.addMatcher(
            masterClassApi.endpoints.findNamePlusGetAll.matchPending,
            FindNamePlusGetAll.pending
        );
        builder.addMatcher(
            masterClassApi.endpoints.findNamePlusGetAll.matchFulfilled,
            FindNamePlusGetAll.fulfilled
        );
        builder.addMatcher(
            masterClassApi.endpoints.findNamePlusGetAll.matchRejected,
            FindNamePlusGetAll.rejected
        );
    },
});

export const masterClassReducer = masterClassSlice.reducer;
export const { setCurrentPage, findMasterClass } = masterClassSlice.actions;
