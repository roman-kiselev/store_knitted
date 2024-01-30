import { IMasterClass } from "./IMasterClass";

export interface IMasterClassSlice {
    masterClass: IMasterClass[] | [];
    isLoading: boolean;
    isError: boolean;
    message: string;
}
