import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// crate the api
export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000'}),
  endpoints: builder => ({
    signup: builder.mutation({
      query: ({ name, email, password }) => ({
        url: 'users/signup',
        method: 'POST',
        body: { name, email, password }
      })
    }),

    login: builder.mutation({
      query: ({ email, password }) => ({
        url: 'users/login',
        method: 'POST',
        body: { email, password }
      })
    })
  })
})

export const { useSignupMutation, useLoginMutation } = appApi

export default appApi