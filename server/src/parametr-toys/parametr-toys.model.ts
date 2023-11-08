import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { MasterClass } from 'src/master-class/master-class.model';
import { McParameterToys } from 'src/master-class/mc-parameter-toys.model';
import { ValueParameter } from 'src/value-parameter/value-parameter.model';

interface ParameterToysAttr {
  name: string;
}

@Table({ tableName: 'parameter-toys' })
export class ParameterToys extends Model<ParameterToys, ParameterToysAttr> {
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

  @BelongsToMany(() => MasterClass, () => McParameterToys)
  masterClass: MasterClass[];

  @HasMany(() => ValueParameter)
  valueParametr: ValueParameter[];
}
