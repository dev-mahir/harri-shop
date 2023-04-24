import { configureStore } from '@reduxjs/toolkit'
import { ApiSlice } from './ApiSlice'


export const store = configureStore({
  reducer: {
    [ApiSlice.reducerPath]: ApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiSlice.middleware),
})

