import { ICartPattern } from "../cart";

export interface IMasterClassForCart {
    id: string;
    nameRu: string;
    nameEng: string;
    priceRu: number;
    priceEng: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: null;
    CartPattern: ICartPattern;
}
