import { IMasterClass } from "./IMasterClass";

export interface IMasterClassSlice {
    masterClass: IMasterClass[] | [];
    currentPage: number;
    totalCount: number;
    pageSize: number;
    isLoading: boolean;
    isError: boolean;
    message: string;
}
