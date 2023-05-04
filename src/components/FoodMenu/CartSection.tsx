import { useSession } from 'next-auth/react'
import { useAppSelector, useAppDispatch } from '@/redux/store/reduxHooks'
import { CartItem } from '../ConfirmOrder/CartItem'
import { Cart } from 'iconoir-react'
import { Button } from '@/components'
import { processOrder } from '@/redux/slices/cartSlice'
import { setLoginToOrderError } from '@/redux/slices/userSlice'
import { useRouter } from 'next/router'
import { TSCartMenuItem } from '@/ts/interfaces'

export const CartSection = () => {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector((state) => state.cart.order)
  const totalPrice = useAppSelector((state) => state.cart.totalPrice)
  const userId = useAppSelector((state) => state.user.id)
  const router = useRouter()
  const { data: session } = useSession()

  const items = cartItems?.map((item: TSCartMenuItem) => {
    const { id, image, name, category, price, quantity } = item
    const itemTotal = item.itemTotal
    console.log('itemTotal', itemTotal)
    return (
      <CartItem
        key={id}
        id={id}
        image={image}
        name={name}
        category={category}
        price={price}
        quantity={quantity}
        itemTotal={itemTotal}
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
    <section className="flex items-center overflow-hidden">
      <div className="h-3/4 flex item-center overflow-hidden">
        <div className="w-full h-1/12 text-sm md:text-base flex flex-col items-center justify-center rounded-3xl px-6 md:px-8 bg-quaternaryGrey">
          <div className="flex justify-center items-center flex-col p-4">
            <Cart className="text-primaryPink" height={75} width={75} />
            <h1 className="text-3xl p-2">CHECKOUT</h1>
          </div>
          <div className="w-full">
            <div className="flex flex-row justify-between items-center bg-primaryPink my-1">
              <div className="relative w-3/12 object-cover"></div>
              <p className="text-white w-5/12 m-1 pl-2 ">Item</p>
              <p className="text-white w-2/12 m-1">Qty</p>
              <p className="text-white w-2/12 m-1">Price</p>
            </div>
          </div>
          <div className="overflow-y-auto w-full max-h-[15rem]"> {items}</div>
          <p className="w-full text-right bg-primaryPink text-secondaryWhite p-2 ">
            Order Total = <p className="inline text-bold">£{totalPrice}</p>
          </p>
          <Button
            type="button"
            text="CONFIRM ORDER"
            optionalClassNames="min-w-[200px] md:min-w-[300px] w-10/12 text-base bg-tertiaryBlack my-5"
            onClick={onConfirmOrder}
          />
        </div>
      </div>
    </section>
  )
}
