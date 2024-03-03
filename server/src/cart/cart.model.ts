import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { MasterClass } from 'src/master-class/master-class.model';
import { TempUser } from 'src/temp-user/temp-user.model';
import { Toys } from 'src/toys/toys.model';
import { CartPattern } from './cart-pattern.model';
import { CartToys } from './cart-toys.model';

export interface CartAttr {
  idTempUser: number;
}

@Table({ tableName: 'cart' })
export class Cart extends Model<Cart, CartAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  totalPriceRu: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  totalPriceEng: number;

  @ForeignKey(() => TempUser)
  @Column({
    type: DataType.INTEGER,
  })
  idTempUser: number;

  @BelongsToMany(() => Toys, () => CartToys)
  toys: Toys[];

  @BelongsToMany(() => MasterClass, () => CartPattern)
  patterns: MasterClass[];
}
