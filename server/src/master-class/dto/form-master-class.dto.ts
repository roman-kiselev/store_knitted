import { IsNotEmpty } from 'class-validator';
import { MasterClass } from '../master-class.model';

export class FormMasterClass {
  @IsNotEmpty()
  readonly email: string;
  @IsNotEmpty()
  readonly language: string;
  @IsNotEmpty()
  readonly patterns: MasterClass[];
}
