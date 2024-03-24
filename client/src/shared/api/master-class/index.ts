import {
    IGetAllMasterClassWithPag,
    MasterClassViewDto,
} from "../../interface/models/masterClass";
import { mainApi } from "../main";

export const masterClassApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllMasterClass: builder.query<
            IGetAllMasterClassWithPag,
            { page: string; limit: string; offset: string }
        >({
            query: ({ limit, page, offset }) => ({
                url: `master-class/?page=${page}&limit=${limit}&offset=${offset}`,
                method: "GET",
            }),
        }),
        getOneMasterClass: builder.query<any, { id: string }>({
            query: ({ id }) => ({
                url: `master-class/${id}`,
                method: "GET",
            }),
        }),
        createPattern: builder.mutation({
            query: (data) => {
                const formData = new FormData();
                formData.append("nameRu", data.nameRu);
                formData.append("nameEng", data.nameEng);
                formData.append("priceRu", data.priceRu);
                formData.append("priceEng", data.priceEng);
                formData.append("mainImage", data.mainImage as File);
                formData.append("fileRu", data.fileRu as File);
                formData.append("fileEng", data.fileEng as File);
                formData.append("params", JSON.stringify(data.params));

                return {
                    url: "master-class",
                    method: "POST",
                    body: formData,
                };
            },
        }),

        formBuyPattern: builder.mutation({
            query: (data) => ({
                url: "master-class/buy-pattern",
                method: "POST",
                body: data,
            }),
        }),

        viewPattern: builder.mutation<void, MasterClassViewDto>({
            query: (data) => ({
                url: "master-class/view-pattern",
                method: "POST",
                body: data,
            }),
        }),
    }),
});
