import { IParamsPattern } from "./IParamsPattern";

export interface ICreatePattern {
    nameRu: string;
    nameEng: string;
    params: IParamsPattern[] | [];
    priceRu: number;
    priceEng: number;
}
