import { createSlice } from '@reduxjs/toolkit'

export interface Chat {
  first_party: string;
  second_party: string;
  chat_type: string;
  chat_name: string;
  chat_image: string;
  last_message: {
    sender: string;
    text: string;
    message_type: string;
    chat: string;
    created_at: Date;
  },
  created_at: Date;
  updated_at: Date;
}


const initialState: Chat[] = [] as Chat[]

export const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    
  },
})



export default chatsSlice.reducer