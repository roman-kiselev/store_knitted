import { IToken, IUserLogin } from "../../interface";
import { mainApi } from "../main";

export const authApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<IToken, IUserLogin>({
            query: (userData) => ({
                url: "auth/login",
                method: "POST",
                body: userData,
            }),
        }),
        check: builder.query<IToken, void>({
            query: () => ({
                url: "auth/check",
                method: "GET",
            }),
        }),
    }),
});
