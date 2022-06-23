import AsyncStorage from '@react-native-async-storage/async-storage';
import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface GlobalState {
  credentials: Credentials,
  phone: string,
  contacts: { name: string; phone: string}[],
  isLoggedIn: boolean
}

type Credentials = {
  phone: string; _id: string
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
    loginAction: (state: GlobalState, action: AnyAction) => {
      state.isLoggedIn = true
    }
  },
  extraReducers(builder) {
    builder.addCase(getCredentials.fulfilled, (state, action) => {
      if (action.payload) {
        console.log("got here")
        state.credentials = JSON.parse(action.payload)
      }
    }),
    builder.addCase(getCredentials.rejected, (state, action) => {
      console.log("git gere " ,action.error)
    })
  },
})

export const getCredentials = createAsyncThunk("local/get_credentials", async() => {
  console.log("got here to get Credentiasl")
  return await AsyncStorage.getItem("@lication_credentials")
})

export const setCredentials = createAsyncThunk("local/set_credentials", async(credentials: string) => {
  console.log("Setting credentials")
  return await AsyncStorage.setItem("@lication_credentials", credentials)
})

export const { loginAction } = globalSlice.actions
export default globalSlice.reducer