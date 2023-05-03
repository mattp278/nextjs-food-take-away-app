import { FoodCategory } from '@prisma/client'
import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit'
import { AppState } from '../store/store'
import { TSCartMenuItem, TSFoodMenuItem } from '@/ts/interfaces'
import { apiCall } from '@/utils/apiUtil'
import { ApiErrorMsg } from '@/ts/interfaces'

export interface CartState {
  numOfOrderItems: number
  totalPrice: number
  order: TSCartMenuItem[]
  confimedOrderId: string | null
  errors: ApiErrorMsg[] | null
}

interface orderDetails {
  userId: string | null
  foodItems: TSFoodMenuItem[]
}

const initialState: CartState = {
  numOfOrderItems: 0,
  totalPrice: 0,
  order: [],
  confimedOrderId: null,
  errors: null,
}

export const processOrder = createAsyncThunk(
  'cartState/processOrder',
  async ({ userId, foodItems }: orderDetails): Promise<any> => {
    try {
      const res = await apiCall({
        httpMethod: 'POST',
        route: 'http://localhost:3000/api/v1/order/process-order',
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
      const { quantity, price } = payload

      const existingItemIndex = state.order.findIndex(
        (cartItem) => cartItem.id === payload.id
      )

      if (existingItemIndex !== -1) {
        state.order[existingItemIndex].quantity += quantity
        const itemTotal = state.order[existingItemIndex].quantity * price
        state.order[existingItemIndex].itemTotal = itemTotal
        state.numOfOrderItems += quantity
        state.totalPrice += price * quantity
        return
      }

      const item = {
        ...payload,
        quantity: quantity,
        totalPrice: +price,
      }
      state.order.push(item)

      state.numOfOrderItems += quantity
      state.totalPrice += payload.price * quantity
    },
    resetCartState(state) {
      Object.assign(state, initialState)
    },
  },
  extraReducers: (builder) => {
    builder
      //---------------------------------------------------------------------
      .addCase(processOrder.pending, (state) => {
        state.errors = null
        state.confimedOrderId = null
      })
      .addCase(processOrder.fulfilled, (state, { payload }) => {
        const orderId = payload.orderId

        state.numOfOrderItems = 0
        state.totalPrice = 0
        state.order = []
        state.confimedOrderId = orderId
      })
      .addCase(processOrder.rejected, (state, { error }: AnyAction) => {
        state.errors = [error.message]
        state.confimedOrderId = null
      })

    //---------------------------------------------------------------------
  },
})

export const selectCarttSlice = (state: AppState) => state.cart

export const { addCartItem, resetCartState } = cartSlice.actions

export default cartSlice.reducer
