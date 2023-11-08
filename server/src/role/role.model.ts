import { ModelAttributeColumnOptions } from 'sequelize';
import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript';
import { User } from 'src/user/user.model';

interface RoleAttr {
  name: string;
  description: string;
}

@Table({ tableName: 'role', paranoid: true })
export class Role extends Model<Role, RoleAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  } as ModelAttributeColumnOptions)
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: true,
  } as ModelAttributeColumnOptions)
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: true,
  })
  description: string;

  @HasOne(() => User)
  user: User;
}
