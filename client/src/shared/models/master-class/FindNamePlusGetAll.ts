import { CaseReducer } from "@reduxjs/toolkit";
import {
    CreateHandler,
    IGetAllMasterClassWithPag,
    IMasterClassSlice,
} from "../../interface";

class FindNamePlusGetAll
    implements
        CreateHandler<IMasterClassSlice, IGetAllMasterClassWithPag, void>
{
    pending: CaseReducer<IMasterClassSlice> = (state) => {
        state.isError = false;
        state.isLoading = true;
        state.message = "";
        state.masterClass = [];
    };
    fulfilled: CaseReducer<
        IMasterClassSlice,
        { payload: IGetAllMasterClassWithPag; type: string }
    > = (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.totalCount = action.payload.count;
        state.message = "";
        state.masterClass = action.payload.rows;
    };
    rejected: CaseReducer<IMasterClassSlice> = (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = "Error when get all master class";
        state.masterClass = [];
    };
}

export default new FindNamePlusGetAll();
