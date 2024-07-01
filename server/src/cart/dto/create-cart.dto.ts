import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCart {
  @IsNotEmpty()
  idTempUser: number;
  @IsOptional()
  totalPriceRu?: number;
  @IsOptional()
  totalPriceEng?: number;
}
