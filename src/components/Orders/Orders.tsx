import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/store/reduxHooks'
import { getUserOrders } from '@/redux/slices/ordersSlice'
import { TSOrderItem, TSOrder } from '@/ts/interfaces'

export const Orders = () => {
  const dispatch = useAppDispatch()
  const { orders } = useAppSelector((state) => state.orders)
  const userId = useAppSelector((state) => state.user.id)

  useEffect(() => {
    if (userId) dispatch(getUserOrders(userId))
  }, [userId, dispatch])

  const orderItems = orders?.map((order: TSOrder) => {
    const { orderItems } = order
    const orderId = order.id

    const orderItem = orderItems?.map((orderItem: TSOrderItem) => {
      const { food, quantity, orderId } = orderItem
      const { name, image, price } = food
      const foodId = food.id

      return (
        <div key={foodId}>
          {orderId}-{name}-{quantity}-{price}-
        </div>
      )
    })

    return (
      <div key={orderId}>
        {orderId}
        <div>{orderItem}</div>
      </div>
    )
  })

  return <div>{orderItems}</div>
}
