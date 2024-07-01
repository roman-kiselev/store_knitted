import { IsNotEmpty } from 'class-validator';

export class CreateTempUserDto {
  @IsNotEmpty()
  readonly uuid: string;
}
