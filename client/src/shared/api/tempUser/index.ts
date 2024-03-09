import { IUserDataPayload } from "../../interface";
import { mainApi } from "../main";

export const tempUserApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        checkTemporaryUser: builder.query<IUserDataPayload, { uuid: string }>({
            query: ({ uuid }) => ({
                url: `temp-user/?id=${uuid}`,
                method: "GET",
            }),
        }),
    }),
});
