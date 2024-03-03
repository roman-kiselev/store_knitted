export interface IPaymentSlice {
    email: string;
    amount: string;
    status: boolean;
    isSuccess: boolean;
    isError: boolean;
    isLoading: boolean;
}
