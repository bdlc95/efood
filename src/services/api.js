import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query({
      query: () => 'restaurantes'
    }),
    getRestaurante: builder.query({
      query: (id) => `restaurantes/${id}`
    }),
    
    purchase: builder.mutation({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { 
  useGetRestaurantesQuery, 
  useGetRestauranteQuery, 
  usePurchaseMutation // Exporte o hook de mutação
} = api

export default api