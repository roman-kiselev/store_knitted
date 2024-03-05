import { IUserData } from "../../interface/models";
import { mainApi } from "../main";

export const tempUserApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        checkTemporaryUser: builder.query<
            { userData: IUserData },
            { uuid: string }
        >({
            query: ({ uuid }) => ({
                url: `temp-user/?id=${uuid}`,
                method: "GET",
            }),
        }),
    }),
});
