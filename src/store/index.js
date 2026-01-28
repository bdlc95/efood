import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'

// A palavra 'export' deve estar antes de 'const store'
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})