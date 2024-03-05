export interface ITempUserSlice {
    id: number;
    uuid: string;
    createdAt: Date;
    updatedAt: Date;
    cartId: number;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
}
