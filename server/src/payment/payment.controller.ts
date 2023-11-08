import { Body, Controller, Post } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private paymentsService: PaymentService) {}

  @Post('/')
  makePayment(@Body() dto: CreatePaymentDto) {
    return this.paymentsService.makePayment(dto);
  }
}
