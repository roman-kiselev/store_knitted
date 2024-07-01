import { IsNotEmpty } from 'class-validator';

export class AddPatternToCart {
  @IsNotEmpty()
  idPattern: number;
  @IsNotEmpty()
  idTempUser: number;
  @IsNotEmpty()
  idCart: number;
}
