import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CartToys } from 'src/cart/cart-toys.model';
import { Cart } from 'src/cart/cart.model';
import { ToysController } from './toys.controller';
import { Toys } from './toys.model';
import { ToysService } from './toys.service';

@Module({
  controllers: [ToysController],
  providers: [ToysService],
  imports: [SequelizeModule.forFeature([Toys, Cart, CartToys])],
})
export class ToysModule {}
