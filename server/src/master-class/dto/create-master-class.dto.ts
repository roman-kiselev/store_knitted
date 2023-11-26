export class CreateMasterClassDto {
  readonly nameRu: string;
  readonly nameEng: string;
  readonly priceRu: number;
  readonly priceEng: number;
  // readonly params: IParamsPatterns[];
  readonly params: string;
}
