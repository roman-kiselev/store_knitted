export interface ICurrencySlice {
    currency: string;
    defaultCurrency: string;
    // Текущий курс валюты к рублю
    сurrentCurrency: number;
    isLoading: boolean;
    isError: boolean;
    message: string;
}
