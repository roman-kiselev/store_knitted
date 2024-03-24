import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { CartPattern } from 'src/cart/cart-pattern.model';
import { Cart } from 'src/cart/cart.model';
import { FilesMasterClass } from 'src/files-master-class/files-master-class.model';
import { FilesModule } from 'src/files/files.module';
import { PatternParams } from 'src/pattern-params/pattern-params.model';
import { PaymentMasterclass } from 'src/payment/payment-masterclass.model';
import { Payment } from 'src/payment/payment.model';
import { MasterClassView } from './master-class-view.model';
import { MasterClassController } from './master-class.controller';
import { MasterClass } from './master-class.model';
import { MasterClassService } from './master-class.service';

@Module({
  controllers: [MasterClassController],
  providers: [MasterClassService],
  imports: [
    SequelizeModule.forFeature([
      FilesMasterClass,
      MasterClass,
      PatternParams,
      Payment,
      PaymentMasterclass,
      Cart,
      CartPattern,
      MasterClassView,
    ]),
    AuthModule,
    FilesModule,
  ],
  exports: [MasterClassService],
})
export class MasterClassModule {}
