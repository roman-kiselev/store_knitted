import { IFilesMasterClass } from "./IFilesMasterClass";
import { IParamsMasterClass } from "./IParamsMasterClass";

export interface IMasterClassForCart {
    id: string;
    nameRu: string;
    nameEng: string;
    priceRu: number;
    priceEng: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: null;
    params: IParamsMasterClass[];
    files: IFilesMasterClass;
    quantity: number;
    idCartPattern: number;
}
