import { ApiSlice } from "./ApiSlice";




const brandSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBrand: builder.query({
      query: () => "/brand"
    }),
    addBrand: builder.mutation({
      query: (data) => ({
        url: "/brand",
        method: "POST",
        body: data
      })
    })
  })
});




export const {
  useGetBrandQuery,
  useAddBrandMutation
} = brandSlice;








