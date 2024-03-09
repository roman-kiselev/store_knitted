import { ICart } from "../../interface";
import { mainApi } from "../main";

export const cartApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        getCartById: builder.query<ICart, { idCart: number }>({
            query: ({ idCart }) => ({
                url: `cart/${idCart}`,
                method: "GET",
            }),
        }),
    }),
});
