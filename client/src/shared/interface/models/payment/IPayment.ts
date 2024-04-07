export interface IPayment {
    id: number;
    email: string;
    idUserTemporary: string;
    language: string;
    paymentId: string;
    amount: string;
    status: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: null | Date;
}
