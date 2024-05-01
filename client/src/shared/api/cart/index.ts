import { IAddPatternToCartDto, ICart } from "../../interface";
import { mainApi } from "../main";

export const cartApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        getCartById: builder.query<ICart, { idCart: number }>({
            query: ({ idCart }) => ({
                url: `cart/${idCart}`,
                method: "GET",
            }),
        }),
        addPatternInCart: builder.mutation<ICart, IAddPatternToCartDto>({
            query: (data) => {
                return {
                    url: "cart/addPattern",
                    method: "POST",
                    body: data,
                };
            },
        }),
        deletePatternFromCart: builder.mutation<
            ICart,
            { idCartPattern: number }
        >({
            query: ({ idCartPattern }) => ({
                url: `cart/deletePattern/${idCartPattern}`,
                method: "DELETE",
            }),
        }),
    }),
});
