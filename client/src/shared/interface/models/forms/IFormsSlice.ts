import { ICreatePattern } from "./ICreatePattern";

export interface IFormsSlice {
    createPattern: ICreatePattern;
    isLoading: boolean;
    isError: boolean;
    message: string;
}
