import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit'
import { AppState } from '../store/store'
import { apiCall } from '@/utils/apiUtil'
import { ApiErrorMsg } from '@/ts/interfaces'

export interface UserState {
  id: string | null
  name: string | null
  email: string | null
  errors: ApiErrorMsg[] | null
}

interface signUpEmailPassword {
  name: string
  email: string
  password: string
  password2: string
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

export const signUp = createAsyncThunk(
  'userState/signup',
  async ({
    name,
    email,
    password,
    password2,
  }: signUpEmailPassword): Promise<any> => {
    try {
      const res = await apiCall({
        httpMethod: 'POST',
        route: 'http://localhost:3000/api/v1/user/user',
        body: { name, email, password, password2 },
      })
      const { data } = res
      return data
    } catch (err: any) {
      throw Error(err)
    }
  }
)

export const getAuthUser = createAsyncThunk(
  'userState/auth',
  async ({ email, password }: UserEmailPassword): Promise<any> => {
    try {
      const res = await apiCall({
        httpMethod: 'POST',
        route: 'http://localhost:3000/api/v1/auth/auth',
        body: { email, password },
      })
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
      .addCase(signUp.pending, (state) => {
        state.id = null
        state.name = null
        state.email = null
        state.errors = null
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        const { id, name, email } = payload
        state.id = id
        state.name = name
        state.email = email
        state.errors = null
      })
      .addCase(signUp.rejected, (state, { error }: AnyAction) => {
        state.id = null
        state.name = null
        state.email = null
        state.errors = [error.message]
      })

      //---------------------------------------------------------------------
      .addCase(getAuthUser.pending, (state) => {
        state.id = null
        state.name = null
        state.email = null
        state.errors = null
      })
      .addCase(getAuthUser.fulfilled, (state, { payload }) => {
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
