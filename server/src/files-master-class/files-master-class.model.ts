import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { MasterClass } from 'src/master-class/master-class.model';

interface FilesMasterClassAttr {
  name: string;
}

@Table({ tableName: 'files-master-class' })
export class FilesMasterClass extends Model<
  FilesMasterClass,
  FilesMasterClassAttr
> {
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

  @ForeignKey(() => MasterClass)
  masterClassId: number;
}
