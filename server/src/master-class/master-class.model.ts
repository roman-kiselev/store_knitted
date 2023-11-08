import { ModelAttributeColumnOptions } from 'sequelize';
import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { FilesMasterClass } from 'src/files-master-class/files-master-class.model';
import { ImagesMasterClass } from 'src/images-master-class/images-master.model';
import { ParameterToys } from 'src/parametr-toys/parametr-toys.model';
import { McParameterToys } from './mc-parameter-toys.model';

interface MasterClassAttr {
  name: string;
  description?: string;
  imgMain?: number;
  price: number;
}

@Table({ tableName: 'master-class', paranoid: true })
export class MasterClass extends Model<MasterClass, MasterClassAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  } as ModelAttributeColumnOptions)
  id: true;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: true,
  } as ModelAttributeColumnOptions)
  description: string;

  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: true,
  })
  imgMain?: number;

  @HasMany(() => ImagesMasterClass)
  imagesMasterClass: ImagesMasterClass[];

  @HasMany(() => FilesMasterClass)
  filesMasterClass: FilesMasterClass[];

  @BelongsToMany(() => ParameterToys, () => McParameterToys)
  parameterToys: ParameterToys[];
}
