import { mainApi } from "../main";

export const paymentApi = mainApi.injectEndpoints({
    endpoints: (build) => ({
        createPayment: build.mutation<
            any,
            {
                amount: string;
                masterClass: number[];
                email: string;
                language: string;
                idUserTemporary: string;
            }
        >({
            query: ({
                amount,
                masterClass,
                email,
                language,
                idUserTemporary,
            }) => ({
                url: "payment",
                method: "POST",
                body: {
                    amount,
                    masterClass,
                    email,
                    language,
                    idUserTemporary,
                },
            }),
        }),
    }),
});
