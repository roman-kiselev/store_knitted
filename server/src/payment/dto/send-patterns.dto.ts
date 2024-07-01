import { IsNotEmpty } from 'class-validator';

export class SendPatternsDto {
  @IsNotEmpty()
  masterClassId: number[];
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  language: string;
}
