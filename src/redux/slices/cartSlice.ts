import { FoodCategory } from '@prisma/client'
import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit'
import { AppState } from '../store/store'
import { CartMenuItemInterface, FoodMenuItemInterface } from '@/ts/interfaces'
import { apiCall } from '@/utils/apiUtil'
import { ApiErrorMsg } from '@/ts/interfaces'

export interface CartState {
  numOfOrderItems: number
  totalPrice: number
  order: CartMenuItemInterface[]
  errors: ApiErrorMsg[] | null
}

interface orderDetails {
  userId: string | null
  foodItems: FoodMenuItemInterface[]
}

const initialState: CartState = {
  numOfOrderItems: 0,
  totalPrice: 0,
  order: [],
  errors: null,
}

export const processOrder = createAsyncThunk(
  'cartState/processOrder',
  async ({ userId, foodItems }: orderDetails): Promise<any> => {
    try {
      const res = await apiCall({
        httpMethod: 'POST',
        route: 'http://localhost:3000/api/v1/order/processOrder',
        body: { userId, foodItems },
      })
      const { data } = res
      return data
    } catch (err: any) {
      throw Error(err)
    }
  }
)

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, { payload }) {
      const { quantity } = payload

      const existingItemIndex = state.order.findIndex(
        (cartItem) => cartItem.id === payload.id
      )

      if (existingItemIndex !== -1) {
        state.order[existingItemIndex].quantity += quantity
        state.numOfOrderItems += quantity
        state.totalPrice += payload.price * quantity
        return
      }

      const item = { ...payload, quantity: quantity }
      state.order.push(item)

      state.numOfOrderItems += quantity
      state.totalPrice += payload.price * quantity
    },
  },
  extraReducers: (builder) => {
    builder
      //---------------------------------------------------------------------
      .addCase(processOrder.pending, (state) => {
        state.errors = null
      })
      .addCase(processOrder.fulfilled, (state, { payload }) => {
        state.numOfOrderItems = 0
        state.totalPrice = 0
        state.order = []
      })
      .addCase(processOrder.rejected, (state, { error }: AnyAction) => {
        state.errors = [error.message]
      })

    //---------------------------------------------------------------------
  },
})

export const selectCarttSlice = (state: AppState) => state.cart

export const { addCartItem } = cartSlice.actions

export default cartSlice.reducer
