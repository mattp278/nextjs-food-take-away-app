import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit'
import { AppState } from '../store/store'
import { CartMenuItemInterface } from '@/ts/interfaces'
import { stat } from 'fs'

export interface CartState {
  numOfOrderItems: number
  totalPrice: number
  order: CartMenuItemInterface[]
}

const initialState: CartState = {
  numOfOrderItems: 0,
  totalPrice: 0,
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
