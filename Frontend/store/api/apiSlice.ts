// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from "react-native-dotenv";
// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: "https://lication-backend.herokuapp.com" }),
  // The "endpoints" represent operations and requests for this server
  endpoints: builder => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getChats: builder.query<MyResponse<ChatType[]>,string>({
      // The URL for the request is '/fakeApi/posts'
      
      query: userId => `/${userId}/chats`
    }),

    getSingleChat: builder.query({
      query: chatId => `someUserId/chats/${chatId}`
    }),

    createMessage: builder.mutation({
      query: body => ({
        url: '/messages',
        method: 'POST',
        body
      })
    }),

    login: builder.mutation<MyResponse<User>, any>({
      query: user => ({
        url: '/login',
        method: "POST",
        body: user
      })
    })
  })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetChatsQuery, useGetSingleChatQuery, useLoginMutation, useCreateMessageMutation } = apiSlice


type MyResponse<T> = {
  data: T;
  error: string;
}

type User = {
  id: string;
  display_name: string;
  phone: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export type Message = {
  id: string;
  text: string;
  sender: string;
  message_type: string;
  created_at: string;
  chat: string;
}

export type ChatType = {
  id: string;
  first_party: string;
  second_party: string;
  chat_type: string;
  chat_name: string;
  chat_image: string;
  messages: Message[];
  created_at: Date;
  updated_at: Date;
}