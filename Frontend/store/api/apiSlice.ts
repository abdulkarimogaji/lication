import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: "https://lication-backend.herokuapp.com" }),
  tagTypes: ['chats', 'user'],
  endpoints: builder => ({
    getChats: builder.query<MyResponse<ChatType[]>, string>({
      query: userId => `/${userId}/chats`,
      providesTags: (result) => result?.data
        ? [...result.data.map(({ id }) => ({ type: 'chats' as const, id })), 'chats']
        : ['chats'],
    }),

    getSingleChat: builder.query<MyResponse<ChatType>, string>({
      query: chatId => `/chats/${chatId}`,
      providesTags: (result) => [{ type: 'chats', id: result?.data.id }]
    }),

    createMessage: builder.mutation<MyResponse<Message>, Message>({
      query: body => ({
        url: '/messages',
        method: 'POST',
        body
      }),
      // onQueryStarted({ chat, ...patch }, { dispatch, queryFulfilled }) {
      //   const patchResult = dispatch(
      //     apiSlice.util.updateQueryData('getSingleChat', chat, (draft) => {
      //       Object.assign(draft, patch)
      //     })
      //   )
      //   queryFulfilled.catch(() => {
      //     patchResult.undo()
      //     dispatch(apiSlice.util.invalidateTags(['chats']))
      //   })
      // },

      invalidatesTags: (result) => [{ type: 'chats', id: result?.data.chat }]
    }),

    login: builder.mutation<MyResponse<User>, any>({
      query: user => ({
        url: '/login',
        method: "POST",
        body: user
      }),
      invalidatesTags: ["user"]
    })
  })
})


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
  last_message: Message;
  created_at: Date;
  updated_at: Date;
}