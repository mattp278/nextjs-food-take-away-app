import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit'
import { AppState } from '../store/store'
import { CartMenuItemInterface } from '@/ts/interfaces'
import { apiCall } from '@/utils/apiUtil'

export interface CartState {
  numOfOrderItems: number
  totalPrice: number
  order: CartMenuItemInterface[]
}

interface foodItem {
  id: string
  quantity: number
}

interface orderDetails {
  userId: string
  foodItems: foodItem[]
}

const initialState: CartState = {
  numOfOrderItems: 0,
  totalPrice: 0,
  order: [],
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
  extraReducers: (builder) => {},
})

export const selectCarttSlice = (state: AppState) => state.cart

export const { addCartItem } = cartSlice.actions

export default cartSlice.reducer
