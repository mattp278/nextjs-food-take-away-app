import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/redux/store/reduxHooks'
import { setConfirmOrderState } from '@/redux/slices/cartSlice'
import { confirmOrder, sendEmailConfirmation } from '@/redux/slices/ordersSlice'
import { DeliveryTruck } from 'iconoir-react'
import Image from 'next/image'

export const OrderComplete = () => {
  const dispatch = useAppDispatch()
  const { userId, email } = useAppSelector((state) => state.user)
  const pendingOrderId = useAppSelector((state) => state.cart.pendingOrderId)
  const confirmedOrderId = useAppSelector(
    (state) => state.cart.confirmedOrderId
  )

  useEffect(() => {
    if (pendingOrderId) {
      dispatch(setConfirmOrderState({ pendingOrderId: pendingOrderId }))
    }
  }, [pendingOrderId, dispatch])

  useEffect(() => {
    if (confirmedOrderId) {
      dispatch(confirmOrder({ orderId: confirmedOrderId }))
      dispatch(sendEmailConfirmation({ orderId: confirmedOrderId }))
    }
  }, [userId, confirmedOrderId, dispatch])

  return (
    <section className="m-8 flex w-11/12 flex-col items-center justify-center rounded-3xl bg-quaternaryGrey md:p-5 md:shadow-lg lg:w-1/2 ">
      <DeliveryTruck className="text-primaryPink" height={125} width={125} />
      <h1 className="p-2 text-center text-3xl">ORDER CONFIRMED</h1>
      <p className="mt-5 text-xl">Your order number is:</p>
      {confirmedOrderId ? (
        <p className="mb-10 bg-primaryPink p-3 text-base text-secondaryWhite md:text-xl">
          {confirmedOrderId}
        </p>
      ) : null}
      <p className="m-5 text-xl">
        An email confirmation has been sent to {email}
      </p>
      <div className="relative min-h-[3.5rem] min-w-[15rem] md:min-h-[5rem] md:min-w-[20rem] lg:ml-6 ">
        <Image
          src="/curry_club_pink.png"
          fill
          style={{ objectFit: 'contain' }}
          alt="Indian Platter"
          sizes="(max-width: 600px) 200px, 300px"
        />
      </div>
    </section>
  )
}
