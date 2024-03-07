import { IUserData } from "../../interface/models";
import { mainApi } from "../main";

interface IUserDataPayload {
    userData: IUserData;
}

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
