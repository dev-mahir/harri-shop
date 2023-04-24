import { ApiSlice } from "./ApiSlice";




const colorSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getColor: builder.query({
      query: () => "/color",
      providesTags: ["Color"]
    }),
    
    addColor: builder.mutation({
      query: (data) => ({
        url: "/color",
        method: "POST",
        body: data
      }),
       invalidatesTags: ["Color"]
    }),

    deleteColor: builder.mutation({
      query: (id) => ({
        url: `/color/${id}`,
        method: "DELETE",
      }),
       invalidatesTags: ["Color"]
    })
  })
});




export const {
  useGetColorQuery,
  useAddColorMutation,
  useDeleteColorMutation
} = colorSlice;








