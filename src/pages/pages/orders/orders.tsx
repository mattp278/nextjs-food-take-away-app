import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/store/reduxHooks'
import { getUserOrders } from '@/redux/slices/ordersSlice'

export default function OrdersPage() {
  const dispatch = useAppDispatch()
  const { orders } = useAppSelector((state) => state.orders)
  const userId = useAppSelector((state) => state.user.id)

  useEffect(() => {
    if (userId) dispatch(getUserOrders(userId))
  }, [userId, dispatch])

  console.log('orders', orders)

  return <div>Enter</div>
}
