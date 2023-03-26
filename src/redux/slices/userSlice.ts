import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { AppState } from '../store/store'

export interface UserState {
  id: string | null
  name: string | null
  email: string | null
  errors: { name: string; message: string; stack: string }[] | null
}

interface UserEmailPassword {
  email: string
  password: string
}

const initialState: UserState = {
  id: null,
  name: null,
  email: null,
  errors: null,
}

export const getAuthUser = createAsyncThunk(
  'userState/user',
  async ({ email, password }: UserEmailPassword): Promise<any> => {
    try {
      const url = 'http://localhost:3000/api/v1/user/user'
      const body = { email, password }
      const res = await axios.post(url, body)
      const { data } = res.data

      return data
    } catch (err: any) {
      const errorMessage = err.response.data.errors[0].msg
      throw Error(errorMessage)
    }
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // setDummyReducer(state, action) {
    //   state.dummyState = action.payload
    // },
  },
  extraReducers: (builder) => {
    builder
      //---------------------------------------------------------------------
      .addCase(getAuthUser.pending, (state) => {
        state.id = null
        state.name = null
        state.email = null
        state.errors = null
      })
      .addCase(getAuthUser.fulfilled, (state, { payload }) => {
        console.log('payload', payload)
        const { id, name, email } = payload
        state.id = id
        state.name = name
        state.email = email
        state.errors = null
      })
      .addCase(getAuthUser.rejected, (state, { error }: AnyAction) => {
        state.id = null
        state.name = null
        state.email = null
        state.errors = [error.message]
      })
    //---------------------------------------------------------------------
  },
})

export const selectUsertSlice = (state: AppState) => state.user

export default userSlice.reducer
