import { ApiSlice } from "./ApiSlice";


const productSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => "/product"
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
  useGetProductQuery,
  useAddBrandMutation
} = productSlice;








