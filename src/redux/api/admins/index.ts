import { baseApi } from "@/redux/baseApi";
import { tagTypes } from "@/redux/baseApi/tagTypes";
import { Response } from "@/redux/generic-interface";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginAdmin: builder.mutation<Response<ILoginResponse>, ILogin>({
      query: (payload) => ({
        url: "/user/login",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: [tagTypes.AUTH],
    }),
  }),
});

export const { useLoginAdminMutation } = adminApi;
