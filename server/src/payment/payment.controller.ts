import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private paymentsService: PaymentService) {}

  @Get('/check/')
  checkPayment(@Query('idUser') idUser: string) {
    console.log(idUser);
    return this.paymentsService.checkPayment({ idUser });
  }

  @Post('/')
  makePayment(@Body() dto: CreatePaymentDto) {
    return this.paymentsService.makePayment(dto);
  }
}
