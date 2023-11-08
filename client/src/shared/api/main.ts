import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../app/store";

// const currencyQuery = fetchBaseQuery({
//     baseUrl:
//         "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json",
// });

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_URL_API,
    prepareHeaders: (headers, { getState }) => {
        const token =
            (getState() as RootState).auth.token ||
            localStorage.getItem("token");
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
    },
});

const baseQueryPlusPath = (path: string) => {
    const baseQuery = fetchBaseQuery({
        baseUrl: process.env.REACT_APP_URL_API + path,
        prepareHeaders: (headers, { getState }) => {
            const token =
                (getState() as RootState).auth.token ||
                localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
        },
    });

    return baseQuery;
};

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });
const baseQueryWithRetryAdmin = retry(baseQueryPlusPath("/admin"), {
    maxRetries: 1,
});

// export const currencyBaseApi = createApi({
//     reducerPath: "currencyBaseApi",
//     baseQuery: currencyQuery,
//     tagTypes: ["CURRENCY"],
//     refetchOnMountOrArgChange: true,
//     endpoints: () => ({}),
// });

export const mainApi = createApi({
    reducerPath: "main",
    tagTypes: ["Main"],
    baseQuery: baseQueryWithRetry,
    refetchOnMountOrArgChange: true,
    endpoints: () => ({}),
});

export const adminMainApi = createApi({
    reducerPath: "objectsMain",
    tagTypes: ["Admin"],
    baseQuery: baseQueryWithRetryAdmin,
    refetchOnMountOrArgChange: true,
    endpoints: () => ({}),
});
