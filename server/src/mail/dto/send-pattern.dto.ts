import { IsNotEmpty } from 'class-validator';

class SendPatternDto {
  @IsNotEmpty()
  masterClassId: number;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  language: string;
}
