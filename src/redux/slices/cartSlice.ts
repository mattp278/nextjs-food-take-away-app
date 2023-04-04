import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit'
import { AppState } from '../store/store'
import { CartMenuItemInterface } from '@/ts/interfaces'

export interface CartState {
  order: CartMenuItemInterface[]
}

const initialState: CartState = {
  order: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, { payload }) {
      const quanityToAdd = 1
      const existingItemIndex = state.order.findIndex(
        (cartItem) => cartItem.id === payload.id
      )

      if (existingItemIndex !== -1) {
        state.order[existingItemIndex].quantity += quanityToAdd
        return
      }

      const item = { ...payload, quantity: quanityToAdd }
      state.order.push(item)
    },
  },
  extraReducers: (builder) => {},
})

export const selectCarttSlice = (state: AppState) => state.cart

export const { addCartItem } = cartSlice.actions

export default cartSlice.reducer
