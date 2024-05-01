import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cart } from 'src/cart/cart.model';
import { CartModule } from 'src/cart/cart.module';
import { TempUserController } from './temp-user.controller';
import { TempUser } from './temp-user.model';
import { TempUserService } from './temp-user.service';

@Module({
  controllers: [TempUserController],
  providers: [TempUserService],
  imports: [SequelizeModule.forFeature([TempUser, Cart]), CartModule],
})
export class TempUserModule {}
