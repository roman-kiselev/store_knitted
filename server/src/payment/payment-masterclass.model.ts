import { ModelAttributeColumnOptions } from 'sequelize';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { MasterClass } from 'src/master-class/master-class.model';
import { Payment } from './payment.model';

interface PaymentMasterclassAttr {
  paymentId: number;
  masterClassId: number;
}

@Table({ tableName: 'payment_masterclass' })
export class PaymentMasterclass extends Model<
  PaymentMasterclass,
  PaymentMasterclassAttr
> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  } as ModelAttributeColumnOptions)
  id: number;

  @ForeignKey(() => Payment)
  @Column({
    type: DataType.INTEGER,
  })
  paymentId: number;

  @ForeignKey(() => MasterClass)
  @Column({
    type: DataType.INTEGER,
  })
  masterClassId: number;
}
