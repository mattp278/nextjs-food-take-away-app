import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AppState } from '../store/store'

export interface UserState {
  user_id: string | null
  user: {} | null
}

const initialState: UserState = {
  user_id: null,
  user: null,
}

export const getUser = createAsyncThunk(
  'userState/user',
  async (): Promise<any> => {
    try {
      const url = 'http://localhost:3000/api/users/user'
      const res = await fetch(url)
      const { data } = await res.json()
      const { user } = data
      return user
    } catch (err) {
      console.log('err', err)
    }
  }
)

export const getUserId = createAsyncThunk('userState/user_id', async () => {
  try {
    const url = 'http://localhost:3000/api/users/user_id'
    const res = await fetch(url)
    const { data } = await res.json()
    const user_id = data.user_id.id
    return user_id
  } catch (err) {
    console.log('err', err)
  }
})

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
      .addCase(getUser.pending, (state) => {
        state.user = null
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.user = payload
      })
      .addCase(getUser.rejected, (state, { error }: any) => {
        state.user = null
      })
    //---------------------------------------------------------------------
  },
})

export const selectUsertSlice = (state: AppState) => state.user

export default userSlice.reducer
