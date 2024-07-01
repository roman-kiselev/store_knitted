import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModule } from 'src/database/database.module';
import { MasterClass } from 'src/master-class/master-class.model';
import { TempUser } from 'src/temp-user/temp-user.model';
import { Toys } from 'src/toys/toys.model';
import { CartController } from './cart.controller';
import { Cart } from './cart.model';
import { CartService } from './cart.service';
import { CartPattern } from './entities/cart-pattern.model';
import { CartToys } from './entities/cart-toys.model';

@Module({
  controllers: [CartController],
  providers: [CartService],
  imports: [
    SequelizeModule.forFeature([
      Cart,
      TempUser,
      CartPattern,
      CartToys,
      MasterClass,
      Toys,
    ]),
    DatabaseModule,
  ],
  exports: [CartService],
})
export class CartModule {}
