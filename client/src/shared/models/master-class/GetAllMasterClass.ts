import { CaseReducer } from "@reduxjs/toolkit";
import {
    CreateHandler,
    IMasterClass,
    IMasterClassSlice,
} from "../../interface";

class GetAllMasterClass
    implements
        CreateHandler<IMasterClassSlice, IMasterClass[], { message: string }>
{
    pending: CaseReducer<IMasterClassSlice> = (state, action) => {
        state.isError = false;
        state.isLoading = true;
        state.message = "";
        state.masterClass = [];
    };
    fulfilled: CaseReducer<
        IMasterClassSlice,
        { payload: IMasterClass[]; type: string }
    > = (state, action) => {
        state.masterClass = action.payload;
    };
    rejected: CaseReducer<IMasterClassSlice> = (state, action) => {
        state.isError = true;
        state.message = action.payload;
    };
}

export default new GetAllMasterClass();
