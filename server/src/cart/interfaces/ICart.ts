import { IMasterClassForCart } from 'src/master-class/interfaces/IMasterClassForCart';

export interface ICart {
  id: number;
  totalPriceRu: number;
  totalPriceEng: number;
  idTempUser: number;
  createdAt: Date;
  updatedAt: Date;
  patterns: IMasterClassForCart[];
}
