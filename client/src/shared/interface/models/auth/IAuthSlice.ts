export interface IAuthSlice {
    token: string | null;
    isAuth: boolean;
    isLoading: boolean;
    isError: boolean;
    message: string;
}
