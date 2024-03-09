import { IMasterClass } from "../masterClass";
export interface ICartSlice {
    idCart: number;
    uuid: string;
    totalPriceRu: number;
    totalPriceEng: number;
    idTempUser: number;
    patterns: IMasterClass[];
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    messageError: string;
}
