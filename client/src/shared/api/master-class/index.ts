import { IMasterClass } from "../../interface/models/masterClass";
import { mainApi } from "../main";

export const masterClassApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllMasterClass: builder.query<IMasterClass[], void>({
            query: () => ({
                url: "master-class",
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
                console.log(data);
                return {
                    url: "master-class",
                    method: "POST",
                    body: formData,
                };
            },
        }),
    }),
});
