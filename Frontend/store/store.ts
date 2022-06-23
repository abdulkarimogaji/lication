import { configureStore } from '@reduxjs/toolkit'
import globalReducer from "./globalSlice";
import chatReducer from './chatsSlice'
import { apiSlice } from './api/apiSlice';
export const store = configureStore({
  reducer: {
    global: globalReducer,
    chats: chatReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
     
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(apiSlice.middleware)
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch