import { ModelAttributeColumnOptions } from 'sequelize';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { MasterClass } from 'src/master-class/master-class.model';
import { PaymentMasterclass } from './payment-masterclass.model';

interface PaymentAttr {
  amount: string;
  paymentId: string;
  email: string;
  language: string;
  idUserTemporary: string;
  status: string;
}

@Table({ tableName: 'payment', paranoid: true })
export class Payment extends Model<Payment, PaymentAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  } as ModelAttributeColumnOptions)
  id: number;

  @Column({
    type: DataType.STRING,
  })
  amount: string;

  @Column({
    type: DataType.STRING,
  })
  paymentId: string;

  @Column({
    type: DataType.STRING,
  })
  idUserTemporary: string;

  @Column({
    type: DataType.STRING,
  })
  email: string;

  @Column({
    type: DataType.STRING,
  })
  language: string;

  @Column({
    type: DataType.STRING,
  })
  status: string;

  @Column({
    type: DataType.DATE,
  })
  deletedAt?: Date;

  @BelongsToMany(() => MasterClass, () => PaymentMasterclass)
  masterClass: MasterClass[];
}
