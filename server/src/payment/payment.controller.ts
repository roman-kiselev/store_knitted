import { Body, Controller, Post } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private paymentsService: PaymentService) {}

  @Post('/')
  makePayment(@Body() dto: CreatePaymentDto) {
    console.log(dto);
    return this.paymentsService.makePayment(dto);
  }

  @Post('/check')
  checkPayment(@Body() dto: { idUser: string }) {
    return this.paymentsService.checkPayment(dto);
  }
}
