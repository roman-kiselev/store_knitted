import { ICreatePattern } from "./ICreatePattern";

export interface IFormsSlice {
    createPattern: ICreatePattern[] | null;
    isLoading: boolean;
    isError: boolean;
    message: string;
}
