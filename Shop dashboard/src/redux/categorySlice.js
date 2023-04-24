import { ApiSlice } from "./ApiSlice";




const categorySlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => "/category"
    }),
    addCategory: builder.mutation({
      query: (data) => ({
        url: '/category',
        method: "POST",
        body: data,
      }),
    }),
  })
});




export const {
  useGetCategoryQuery,
  useAddCategoryMutation
} = categorySlice;








