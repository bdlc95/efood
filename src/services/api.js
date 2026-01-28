import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    // Certifique-se de que termina com /efood/ e NÃO inclua 'restaurantes' aqui
    baseUrl: 'https://api-ebac.vercel.app/api/efood/' 
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query({
      // Aqui deve ser apenas 'restaurantes'. 
      // O RTK Query vai unir: baseUrl + query = .../efood/restaurantes
      query: () => 'restaurantes' 
    }),
    getRestaurante: builder.query({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantesQuery, useGetRestauranteQuery } = api
export default api