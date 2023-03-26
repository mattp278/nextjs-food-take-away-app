import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { AppState } from '../store/store'
import { apiCall } from '@/utils/apiUtil'

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
      const res = await apiCall({
        apiCallType: 'POST',
        route: 'http://localhost:3000/api/v1/auth/auth',
        body: { email, password },
      })
      console.log('res', res)
      const { data } = res
      return data
    } catch (err: any) {
      throw Error(err)
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
