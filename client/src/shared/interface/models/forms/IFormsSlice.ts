import { ICreatePattern } from "./ICreatePattern";

export interface IFormsSlice {
    createPattern: ICreatePattern;
    editPattern: ICreatePattern | null;
    isLoading: boolean;
    isError: boolean;
    message: string;
}
