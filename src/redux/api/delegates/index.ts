import { baseApi } from "@/redux/baseApi";
import { tagTypes } from "@/redux/baseApi/tagTypes";
import { Response } from "@/redux/generic-interface";

const delegatesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDelegates: builder.mutation<Response, IDelegatesPayload>({
      query: (payload) => ({
        url: "/user/create",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: [{type: tagTypes.DELEGATES}],
    }),
    uploadPassport: builder.mutation<{ url: string; success: boolean }, FormData>({
      query: (payload) => ({
        url: "/user/image",
        method: "POST",
        data: payload,
        headers: { "Content-Type": "multipart/form-data" },
      }),
    }),
    getDelegates: builder.query<Response<IDelegates[]>, void>({
      query: () => ({
        url: "/user",
        method: "GET",

      }),
      providesTags: [{type: tagTypes.DELEGATES}]

    }),
    getDelegateById: builder.query<Response<IDelegates>, string>({
      query: (id) => ({
        url: `/user/id/${id}`,
        method: "GET",
      }),
      providesTags: [{type: tagTypes.DELEGATES}]
    }),
    deleteDelegates: builder.mutation<Response<IDelegates>, {id: string}>({
      query: (payload) => ({
        url: `/user/delete`,
        method: "DELETE",
        data: payload,
      }),
      invalidatesTags: [{type: tagTypes.DELEGATES}]
    })
  }),
});

export const { useCreateDelegatesMutation, useUploadPassportMutation, useGetDelegateByIdQuery, useLazyGetDelegateByIdQuery, useGetDelegatesQuery, useDeleteDelegatesMutation } = delegatesApi;
