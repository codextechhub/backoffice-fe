import { resetAuth, setAuthUser } from "@/redux/features/auth/authSlice";
import Cookies from "js-cookie";
import { baseApi } from "../baseApi";
import { routesPath } from "@/routes/routesPath";
import type { LoginResponse } from "./type";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, { email: string; password: string }>({
      query: (user) => ({
        url: `/user/auth/login/`,
        method: "POST",
        body: user,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const {data} = result;
          Cookies.set("token", data?.data?.access || "");
          Cookies.set("refresh_token", data?.data?.refresh || "");
          dispatch(setAuthUser(data?.data));
        } catch {}
      },
    }),
    logout: builder.mutation({
      query: (token) => ({
        url: `/user/auth/logout/`,
        method: "POST",
         body: token,
        credentials: "include" as const
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
            await queryFulfilled;
          Cookies.remove("token");
          Cookies.remove("refresh_token");
          window.location.href = routesPath.AUTH.LOGIN;
          dispatch(resetAuth());
        } catch  { 
        }
      },
    }),
    forgotPassword: builder.mutation({
      query: (payload) => ({
        url: `/admin/forgot-password`,
        method: "POST",
        body: payload,
      }),
    }),
    resetPassword: builder.mutation({
      query: (payload) => ({
        url: `/admin/reset-password`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const {
 useLoginMutation,useLogoutMutation
} = authApi;
