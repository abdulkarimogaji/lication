import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface GlobalState {
  credentials: Credentials,
  phone: string,
  contacts: { name: string; phone: string}[],
  isLoggedIn: boolean
}

type Credentials = {
  phone: string; phoneId: string
}

const initialState: GlobalState = {
  credentials: {} as any,
  phone: "",
  contacts: [],
  isLoggedIn: false
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    login: (state: GlobalState, action: PayloadAction<Credentials>) => {
      state.credentials = action.payload
      state.isLoggedIn = true
    },

    getCredentials: (state: GlobalState, action: PayloadAction<Credentials>) => {
      var cred = ""
      AsyncStorage.getItem("@lication_credentials").then(c => cred = c || "")
      state.credentials = JSON.parse(cred)
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, getCredentials } = globalSlice.actions

export default globalSlice.reducer