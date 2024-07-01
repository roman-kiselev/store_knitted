import { IsNotEmpty } from 'class-validator';

export class CreateValueParameterDto {
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  readonly parameterToysId: string;
}
