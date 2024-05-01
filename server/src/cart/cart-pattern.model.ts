import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { MasterClass } from 'src/master-class/master-class.model';
import { Cart } from './cart.model';

export interface CartPatternAttr {
  cartId: number;
  patternId: number;
  quantity: number;
}

@Table({ tableName: 'cart-pattern' })
export class CartPattern extends Model<CartPattern, CartPatternAttr> {
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

  @ForeignKey(() => MasterClass)
  @Column({
    type: DataType.INTEGER,
  })
  patternId: number;
}
