import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




export const ApiSlice = createApi({
  reducerPath: 'api',
  tagTypes: ["Product", "Color", "Brand", "Tag", "Category"],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5050/api/v1' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})


export const { useGetPokemonByNameQuery } = ApiSlice