import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contact } from 'react-native-contacts';
export interface GlobalState {
  credentials: Credentials,
  phone: string,
  contacts: Contact[],
  isLoggedIn: boolean
  id: string;
}

type Credentials = {
  phone: string; id: string
}

const initialState: GlobalState = {
  credentials: {} as any,
  phone: "",
  id: "",
  contacts: [],
  isLoggedIn: false
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    loginAction: (state: GlobalState, action: PayloadAction<any>) => {
      state.isLoggedIn = true
      state.id = action.payload.id
      state.phone = action.payload.phone
    },

    setContacts: (state: GlobalState, action: PayloadAction<Contact[]>) => {
      state.contacts = action.payload
    }
  },
})


export const { loginAction, setContacts } = globalSlice.actions
export default globalSlice.reducer