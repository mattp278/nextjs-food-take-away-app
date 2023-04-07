import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit'
import { AppState } from '../store/store'
import { CartMenuItemInterface } from '@/ts/interfaces'

export interface CartState {
  numOfOrderItems: number
  order: CartMenuItemInterface[]
}

const initialState: CartState = {
  numOfOrderItems: 0,
  order: [],
}

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
        return
      }

      const item = { ...payload, quantity: quantity }
      state.order.push(item)

      state.numOfOrderItems += quantity
    },
  },
  extraReducers: (builder) => {},
})

export const selectCarttSlice = (state: AppState) => state.cart

export const { addCartItem } = cartSlice.actions

export default cartSlice.reducer
