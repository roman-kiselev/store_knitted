import { IsNotEmpty } from 'class-validator';

export class CreateMasterClassDto {
  @IsNotEmpty()
  readonly nameRu: string;
  @IsNotEmpty()
  readonly nameEng: string;
  @IsNotEmpty()
  readonly priceRu: number;
  @IsNotEmpty()
  readonly priceEng: number;
  @IsNotEmpty()
  readonly params: string;
  // readonly params: IParamsPatterns[];
}
