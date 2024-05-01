export class CreatePaymentDto {
  readonly amount: string;
  readonly masterClass: number[];
  readonly email: string;
  readonly language: string;
  readonly idUserTemporary: string;
}
