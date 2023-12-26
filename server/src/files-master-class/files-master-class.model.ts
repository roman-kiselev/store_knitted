import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { MasterClass } from 'src/master-class/master-class.model';

interface FilesMasterClassAttr {
  mainImg: string;
  nameRu: string;
  nameEng: string;
  masterClassId: number;
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
  mainImg: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  nameRu: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: true,
  })
  nameEng: string;

  @ForeignKey(() => MasterClass)
  masterClassId: number;

  // masterClassId: number;
}
