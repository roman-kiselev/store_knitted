import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { MasterClass } from 'src/master-class/master-class.model';

interface ImagesMasterClassAttr {
  name: string;
  masterClassId: number;
}

@Table({ tableName: 'images-master-class' })
export class ImagesMasterClass extends Model<
  ImagesMasterClass,
  ImagesMasterClassAttr
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
