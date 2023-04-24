import { ApiSlice } from "./ApiSlice";




const tagSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTag: builder.query({
      query: () => "/tag"
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
  useGetTagQuery,
  useAddBrandMutation
} = tagSlice;








