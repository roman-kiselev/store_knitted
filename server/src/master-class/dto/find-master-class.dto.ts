import { IsNotEmpty } from 'class-validator';

export abstract class FindMasterClassDto {
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  readonly page: string;
  @IsNotEmpty()
  readonly offset: string;
  @IsNotEmpty()
  readonly limit: string;
}
