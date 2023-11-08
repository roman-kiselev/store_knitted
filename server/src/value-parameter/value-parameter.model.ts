import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ParameterToys } from 'src/parametr-toys/parametr-toys.model';

interface ValueParameterAttr {
  name: string;
}

@Table({ tableName: 'value-parameter' })
export class ValueParameter extends Model<ValueParameter, ValueParameterAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  name: string;

  @ForeignKey(() => ParameterToys)
  parameterToysId: number;
}
