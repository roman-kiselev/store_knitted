export interface ITempUserSlice {
    id: number;
    uuid: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    cartId: number;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
}
