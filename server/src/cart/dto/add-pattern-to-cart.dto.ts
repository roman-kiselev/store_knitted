import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class AddPatternToCart {
  @ApiProperty({ example: 1, description: 'id паттерна' })
  @IsNotEmpty()
  @IsNumber()
  idPattern: number;
  @ApiProperty({ example: 1, description: 'id пользователя' })
  @IsNotEmpty()
  @IsNumber()
  idTempUser: number;
  @ApiProperty({ example: 1, description: 'id корзины' })
  @IsNotEmpty()
  @IsNumber()
  idCart: number;
}
