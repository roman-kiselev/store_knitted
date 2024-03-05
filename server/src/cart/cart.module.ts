import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModule } from 'src/database/database.module';
import { TempUser } from 'src/temp-user/temp-user.model';
import { CartPattern } from './cart-pattern.model';
import { CartToys } from './cart-toys.model';
import { CartController } from './cart.controller';
import { Cart } from './cart.model';
import { CartService } from './cart.service';

@Module({
  controllers: [CartController],
  providers: [CartService],
  imports: [
    SequelizeModule.forFeature([Cart, TempUser, CartPattern, CartToys]),
    DatabaseModule,
  ],
  exports: [CartService],
})
export class CartModule {}
