import { CaseReducer } from "@reduxjs/toolkit";
import {
    CreateHandler,
    IGetAllMasterClassWithPag,
    IMasterClassSlice,
} from "../../interface";

class GetAllMasterClass
    implements
        CreateHandler<
            IMasterClassSlice,
            IGetAllMasterClassWithPag,
            { message: string }
        >
{
    pending: CaseReducer<IMasterClassSlice> = (state, action) => {
        state.isError = false;
        state.isLoading = true;
        state.message = "";
        state.masterClass = [];
    };
    fulfilled: CaseReducer<
        IMasterClassSlice,
        { payload: IGetAllMasterClassWithPag; type: string }
    > = (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.masterClass = action.payload.rows;
        state.totalCount = action.payload.count;
    };
    rejected: CaseReducer<IMasterClassSlice> = (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
    };
}

export default new GetAllMasterClass();
