import { ICartPattern } from 'src/cart/interfaces/ICartPattern';

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
