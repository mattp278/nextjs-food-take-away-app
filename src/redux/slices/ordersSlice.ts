import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit'
import { AppState } from '../store/store'
import { apiCall } from '@/utils/apiUtil'
import { ApiErrorMsg } from '@/ts/interfaces'

export interface OrdersState {
  orders: []
  errors: ApiErrorMsg[] | string[] | null
}

export interface UserId {
  userId: string
}

const initialState: OrdersState = {
  orders: [],
  errors: null,
}

export const getUserOrders = createAsyncThunk(
  'orderState/orders',
  async ({ userId }: UserId): Promise<any> => {
    try {
      const res = await apiCall({
        httpMethod: 'GET',
        route: 'http://localhost:3000/api/v1/order/order',
        body: { userId },
      })
      const { data } = res
      console.log('data', data)
      return data
    } catch (err: any) {
      throw Error(err)
    }
  }
)

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //---------------------------------------------------------------------
      .addCase(getUserOrders.pending, (state) => {
        state.orders = []
        state.errors = null
      })
      .addCase(getUserOrders.fulfilled, (state, { payload }) => {
        state.orders = payload
        state.errors = null
      })
      .addCase(getUserOrders.rejected, (state, { error }: AnyAction) => {
        state.orders = []
        state.errors = null
        state.errors = [error.message]
      })

    //---------------------------------------------------------------------
  },
})

export const selectOrdersSlice = (state: AppState) => state.orders
export const {} = ordersSlice.actions

export default ordersSlice.reducer
