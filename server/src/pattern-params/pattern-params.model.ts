import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { MasterClass } from 'src/master-class/master-class.model';

interface PatternParamsAttr {
  valueRu: string;
  valueEng: string;
  masterClassId: number;
}

@Table({ tableName: 'pattern-params' })
export class PatternParams extends Model<PatternParams, PatternParamsAttr> {
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
  valueRu: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  valueEng: string;

  @ForeignKey(() => MasterClass)
  @Column({
    type: DataType.INTEGER,
  })
  masterClassId: number;
}
