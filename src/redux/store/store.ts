import { userSlice, UserState } from '../slices/userSlice'
import { cartSlice, CartState } from '../slices/cartSlice'
import { ordersSlice, OrdersState } from '../slices/ordersSlice'
import { createWrapper } from 'next-redux-wrapper'
import {
  combineReducers,
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'reduxjs-toolkit-persist'
import storage from 'reduxjs-toolkit-persist/lib/storage'
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1'

export const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel1,
}

const reducers = combineReducers({
  user: userSlice.reducer,
  cart: cartSlice.reducer,
  orders: ordersSlice.reducer,
})

export type RootState = {
  user: UserState
  cart: CartState
  orders: OrdersState
}

const persistedReducer = persistReducer<RootState, Action>(
  persistConfig,
  reducers
)

export const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>
export type AppDispatch = ReturnType<typeof makeStore>['dispatch']

export const wrapper = createWrapper<AppStore>(makeStore)
