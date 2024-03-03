import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MailModule } from 'src/mail/mail.module';
import { MasterClass } from 'src/master-class/master-class.model';
import { PaymentMasterclass } from './payment-masterclass.model';
import { PaymentController } from './payment.controller';
import { Payment } from './payment.model';
import { PaymentService } from './payment.service';

@Module({
  controllers: [PaymentController],
  providers: [PaymentService],
  imports: [
    SequelizeModule.forFeature([Payment, MasterClass, PaymentMasterclass]),
    MailModule,
  ],
})
export class PaymentModule {}
