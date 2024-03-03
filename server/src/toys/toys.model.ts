import { ModelAttributeColumnOptions } from 'sequelize';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ToysAttr {}

@Table({ tableName: 'toys' })
export class Toys extends Model<Toys, ToysAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  } as ModelAttributeColumnOptions)
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  nameRu: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  nameEng: string;

  @Column({
    type: DataType.INTEGER,
  })
  priceRu: number;

  @Column({
    type: DataType.INTEGER,
  })
  priceEng: number;
}
