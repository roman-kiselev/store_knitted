import { ModelAttributeColumnOptions } from 'sequelize';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { MasterClass } from './master-class.model';

interface MasterClassViewAttr {
  userTempId: string;
  masterClassId: number;
}

@Table({ tableName: 'master_class_view' })
export class MasterClassView extends Model<
  MasterClassView,
  MasterClassViewAttr
> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  } as ModelAttributeColumnOptions)
  id: number;

  @Column({
    type: DataType.STRING,
  })
  userTempId: string;

  @Column({
    type: DataType.INTEGER,
  })
  @ForeignKey(() => MasterClass)
  masterClassId: number;
}
