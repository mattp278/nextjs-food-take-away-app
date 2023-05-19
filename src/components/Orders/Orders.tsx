import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/store/reduxHooks'
import { getUserOrders } from '@/redux/slices/ordersSlice'
import { TSOrderItem, TSOrder } from '@/ts/interfaces'
import { ClipboardCheck } from 'iconoir-react'
import { OrderItem } from './OrderItem'
import { convertToReableDate } from '@/utils/convertToReableDate'

export const Orders = () => {
  const dispatch = useAppDispatch()
  const { orders } = useAppSelector((state) => state.orders)
  const userId = useAppSelector((state) => state.user.id)

  useEffect(() => {
    if (userId) dispatch(getUserOrders(userId))
  }, [userId, dispatch])

  const orderItems = orders?.map((order: TSOrder) => {
    const { orderItems } = order
    const date = convertToReableDate(order.createdAt)
    const orderId = order.id
    const totalPrice = +order.totalPrice

    const orderItemElements = orderItems?.map((item: TSOrderItem) => {
      const { food, quantity } = item
      const { id, image, name, price } = food
      return (
        <OrderItem
          key={id}
          id={id}
          image={image}
          name={name}
          price={price}
          quantity={quantity}
        />
      )
    })

    return (
      <article
        key={orderId}
        className="w-screen md:w-full flex justify-center items-center flex-col md:rounded-3xl bg-quaternaryGrey p-6 md:m-3 shadow-lg"
      >
        <ClipboardCheck className="text-primaryPink" height={125} width={125} />
        <h1 className="text-3xl pt-2">ORDER ID</h1>
        <h1 className="text-lg pb-2">{orderId}</h1>
        <h2 className="text-lg pb-2">{date}</h2>

        <div className="w-full">
          <div className="flex flex-row justify-between items-center bg-primaryPink my-1">
            <div className="relative w-3/12 object-cover"></div>
            <p className="text-white w-5/12 m-1 pl-2 ">Name</p>
            <p className="text-white w-2/12 m-1">Qty</p>
            <p className="text-white w-2/12 m-1">Price</p>
          </div>
          {orderItemElements}
          <div className="w-full text-right bg-primaryPink text-secondaryWhite p-2 ">
            <p className="inline text-bold">Order Total = </p>
            <p className="inline text-bold">£{totalPrice.toFixed(2)}</p>
          </div>
        </div>
        <div className="md:hidden w-11/12 sm:border-b sm:border-primaryPink sm:py-6"></div>
      </article>
    )
  })

  const noOrders = (
    <div className="relative sm:w-11/12 md:w-[580px] max-w-[800px] text-sm md:text-base flex flex-col items-center justify-center rounded-3xl bg-secondaryWhite p-8 ">
      <ClipboardCheck className="text-primaryPink" height={125} width={125} />
      <h1 className="bg-primaryPink text-lg rounded-3xl text-secondaryWhite p-3 m-5">
        No orders to display
      </h1>
    </div>
  )

  return (
    <div className="relative sm:w-11/12 md:w-[580px] max-w-[800px] text-sm md:text-base flex flex-col items-center shandow-lg justify-center m-8">
      {orders.length === 0 ? noOrders : null}
      {orders.length > 0 ? orderItems : null}
    </div>
  )
}
