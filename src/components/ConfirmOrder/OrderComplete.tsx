import { useAppSelector } from '@/redux/store/reduxHooks'
import { DeliveryTruck } from 'iconoir-react'
import Image from 'next/image'

export const OrderComplete = () => {
  const orderId = useAppSelector((state) => state.cart.confimedOrderId)

  return (
    <section className="bg-tertiaryGold flex flex-col justify-center items-center w-11/12 lg:w-1/2 rounded-3xl md:p-5 ">
      <DeliveryTruck className="text-primaryPink" height={125} width={125} />
      <h1 className="text-3xl text-center p-2">ORDER CONFIRMED</h1>
      <p className="text-xl mt-5">Your order number is:</p>
      {orderId ? (
        <p className="text-secondaryWhite bg-primaryPink text-base md:text-xl p-3 mb-10">
          {orderId}
        </p>
      ) : null}

      <Image
        src="/curry_club_red.png"
        width={300}
        height={300}
        alt="Indian Platter"
      />
    </section>
  )
}
