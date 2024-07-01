import { IsNotEmpty } from 'class-validator';

export class CreateParameterToysDto {
  @IsNotEmpty()
  readonly name: string;
}
