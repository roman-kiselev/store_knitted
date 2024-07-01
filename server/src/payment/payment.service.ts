import { ICreatePayment, YooCheckout } from '@a2seven/yoo-checkout';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { MailService } from 'src/mail/mail.service';
import { MasterClass } from 'src/master-class/master-class.model';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { SendPatternsDto } from './dto/send-patterns.dto';
import { Payment } from './payment.model';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment) private paymentRepository: typeof Payment,
    @InjectModel(MasterClass) private masterClassRepository: typeof MasterClass,
    private mailService: MailService,
  ) {}

  private async sendPatterns(dto: SendPatternsDto) {
    try {
      let isError = false;

      for (const pattern of dto.masterClassId) {
        const resultPattern = await this.mailService.sendPattern({
          email: dto.email,
          language: dto.language,
          masterClassId: [pattern],
        });

        if (!resultPattern) {
          isError = true;
          throw new HttpException('Pattern error', HttpStatus.BAD_REQUEST);
        }
      }

      return isError;
    } catch (e) {
      console.log(e);
    }
  }

  async makePayment(dto: CreatePaymentDto) {
    try {
      // const { data } = await axios({
      //   method: 'POST',
      //   url: 'https://api.yookassa.ru/v3/payments',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Idempotence-Key': Date.now(),
      //   },
      //   auth: {
      //     username: '262605',
      //     password: 'test_L2Zo-yZ_vvaxOdBbHo7RxVSzY79uBej6rDQpXz6fcw4',
      //   },
      //   data: {
      //     amount: {
      //       value: dto.amount,
      //       currency: 'RUB',
      //     },
      //     capture: true,
      //     confirmation: {
      //       type: 'redirect',
      //       return_url: 'http://localhost:3000/downloadStatus',
      //     },
      //     description: 'Заказа №1',
      //   },
      // });

      // if (!data) {
      //   throw new HttpException('Payment error', HttpStatus.BAD_REQUEST);
      // }

      // if (data.status !== 'succeeded') {
      //   throw new HttpException('Payment error', HttpStatus.BAD_REQUEST);
      // }

      // await this.sendPatterns({
      //   masterClassId: dto.masterClass,
      //   email: dto.email,
      //   language: dto.language,
      // });
      // );
      const checkout = new YooCheckout({
        shopId: '262605',
        secretKey: 'test_L2Zo-yZ_vvaxOdBbHo7RxVSzY79uBej6rDQpXz6fcw4',
      });
      const idempotenceKey = Date.now();

      let paymentId = '';
      const createPayload: ICreatePayment = {
        amount: {
          value: dto.amount,
          currency: 'RUB',
        },
        capture: true,
        payment_method_data: {
          type: 'bank_card',
        },
        confirmation: {
          type: 'redirect',
          return_url: `http://localhost:3000/downloadStatus`,
        },
      };

      const data = await checkout.createPayment(
        createPayload,
        idempotenceKey.toString(),
      );

      if (data) {
        const payment = await this.paymentRepository.create({
          amount: dto.amount,
          email: dto.email,
          paymentId: data.id,
          language: dto.language,
          idUserTemporary: dto.idUserTemporary,
          status: data.status,
        });

        paymentId = payment.id.toString();
        for (const id of dto.masterClass) {
          payment.$add('masterClass', id);
        }
      }

      return data;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async checkPayment(dto: { idUser: string }) {
    try {
      const paymentData = await this.paymentRepository.findOne({
        where: { idUserTemporary: dto.idUser },
        include: { model: MasterClass, as: 'masterClass' },
        order: [['createdAt', 'DESC']],
        limit: 1,
      });
      console.log(paymentData);

      const checkout = new YooCheckout({
        shopId: '262605',
        secretKey: 'test_L2Zo-yZ_vvaxOdBbHo7RxVSzY79uBej6rDQpXz6fcw4',
      });
      // const updatePayment = await this.paymentRepository.update(
      //   where: {
      //     idUserTemporary: dto.idUser;
      //   },
      //   {
      //     status: checkout.getPayment(paymentData.paymentId).status,
      //   }
      //s )
      paymentData.status = (
        await checkout.getPayment(paymentData.paymentId)
      ).status;
      paymentData.save();

      if (paymentData.status === 'succeeded') {
        const masterClassId: number[] = paymentData.masterClass.map(
          (item) => item.id,
        );
        const payment = await checkout.getPayment(paymentData.paymentId);
        const copyPayment = JSON.parse(JSON.stringify(payment));
        // await this.sendPatterns({
        //   email: paymentData.email,
        //   masterClassId: masterClassId,
        //   language: paymentData.language,
        // });

        const result = { ...paymentData.dataValues, ...copyPayment };

        return { ...paymentData.dataValues, ...copyPayment };
      }
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
