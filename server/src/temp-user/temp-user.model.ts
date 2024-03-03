import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript';
import { Cart } from 'src/cart/cart.model';

interface TempUserAttr {
  uuidTempUser: string;
}

@Table({ tableName: 'temp_user' })
export class TempUser extends Model<TempUser, TempUserAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  uuidTempUser: string;

  @HasOne(() => Cart)
  cart: Cart;
}
