// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from "react-native-dotenv";
// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  // The "endpoints" represent operations and requests for this server
  endpoints: builder => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getChats: builder.query({
      // The URL for the request is '/fakeApi/posts'
      
      query: userId => `/${userId}/chats`
    }),

    getSingleChat: builder.query({
      query: chatId => `someUserId/chats/${chatId}`
    }),

    login: builder.mutation({
      query: user => ({
        url: '/login',
        method: "POST",
        body: user
      })
    })
  })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetChatsQuery, useGetSingleChatQuery, useLoginMutation } = apiSlice