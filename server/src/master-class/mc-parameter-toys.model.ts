import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ParameterToys } from 'src/parametr-toys/parametr-toys.model';
import { MasterClass } from './master-class.model';

@Table({ tableName: 'mc-parameter-toys' })
export class McParameterToys extends Model<McParameterToys> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  })
  id: number;

  @ForeignKey(() => MasterClass)
  masterClassId: number;

  @ForeignKey(() => ParameterToys)
  parameterToys: number;
}
