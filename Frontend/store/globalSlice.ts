import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface GlobalState {
  credentials: Credentials,
  phone: string,
  contacts: { name: string; phone: string}[],
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
    }
  },
})


export const { loginAction } = globalSlice.actions
export default globalSlice.reducer