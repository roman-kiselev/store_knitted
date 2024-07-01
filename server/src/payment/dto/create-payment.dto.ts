import { IsNotEmpty } from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty()
  readonly amount: string;
  @IsNotEmpty()
  readonly masterClass: number[];
  @IsNotEmpty()
  readonly email: string;
  @IsNotEmpty()
  readonly language: string;
  @IsNotEmpty()
  readonly idUserTemporary: string;
}
