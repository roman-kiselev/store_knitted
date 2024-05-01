import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Toys } from 'src/toys/toys.model';
import { Cart } from './cart.model';

export interface CartToysAttr {
  cartId: number;
  toysId: number;
  quantity: number;
}

@Table({ tableName: 'cart-toys' })
export class CartToys extends Model<CartToys, CartToysAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: number;

  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
  })
  cartId: number;

  @ForeignKey(() => Toys)
  @Column({
    type: DataType.INTEGER,
  })
  toysId: number;
}
