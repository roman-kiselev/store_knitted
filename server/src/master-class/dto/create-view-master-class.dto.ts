import { IsNotEmpty } from 'class-validator';

export class MasterClassViewDto {
  @IsNotEmpty()
  readonly userTempId: string;
  @IsNotEmpty()
  readonly masterClassId: number;
}
