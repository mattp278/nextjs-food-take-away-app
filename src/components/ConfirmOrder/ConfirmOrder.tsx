import { useSession } from 'next-auth/react'
import { useAppSelector, useAppDispatch } from '@/redux/store/reduxHooks'
import { CartItem } from './CartItem'
import { Cart } from 'iconoir-react'
import { Button } from '@/components'
import { processOrder } from '@/redux/slices/cartSlice'
import { setLoginToOrderError } from '@/redux/slices/userSlice'
import { useRouter } from 'next/router'
import { TSCartMenuItem } from '@/ts/interfaces'

export const ConfirmOrder = () => {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector((state) => state.cart.order)
  const userId = useAppSelector((state) => state.user.id)
  const router = useRouter()
  const { data: session } = useSession()

  const items = cartItems?.map((item: TSCartMenuItem) => {
    const { id, image, name, category, price, quantity } = item
    return (
      <CartItem
        key={id}
        id={id}
        image={image}
        name={name}
        category={category}
        price={price}
        quantity={quantity}
      />
    )
  })

  const onConfirmOrder = async () => {
    if (!session) {
      dispatch(setLoginToOrderError())
      const callbackUrl = encodeURIComponent(router.asPath)
      router.replace(`/api/auth/signin?callbackUrl=${callbackUrl}`)
      return
    }
    await dispatch(processOrder({ userId, foodItems: cartItems }))
    router.push('/pages/confirm-order/order-complete')
  }

  return (
    <section className="relative sm:w-11/12 md:w-[580px] max-w-[800px] text-sm md:text-base flex flex-col items-center justify-center rounded-3xl px-6 md:p-8 bg-tertiaryGold">
      <div className="flex justify-center items-center flex-col p-4">
        <Cart className="text-primaryRed" height={125} width={125} />
        <h1 className="text-3xl p-2">CHECKOUT</h1>
      </div>
      <div className="w-full">
        <div className="flex flex-row justify-between items-center bg-primaryRed my-1">
          <div className="relative w-3/12 object-cover"></div>
          <p className="text-white w-5/12 m-1 pl-2 ">Item</p>
          <p className="text-white w-2/12 m-1">Qty</p>
          <p className="text-white w-2/12 m-1">Price</p>
        </div>
      </div>
      {items}
      <Button
        type="button"
        text="CONFIRM ORDER"
        optionalClassNames="min-w-[200px] md:min-w-[300px] w-10/12 text-base my-5"
        onClick={onConfirmOrder}
      />
    </section>
  )
}
