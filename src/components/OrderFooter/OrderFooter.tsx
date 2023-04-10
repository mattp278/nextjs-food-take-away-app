import { processOrder } from '@/redux/slices/cartSlice'
import { useAppSelector, useAppDispatch } from '@/redux/store/reduxHooks'
import { useRouter } from 'next/router'
import { setLoginToOrderError } from '@/redux/slices/userSlice'

export const OrderFooter = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { order } = useAppSelector((state) => state.cart)
  const userId = useAppSelector((state) => state.user.id)
  const { numOfOrderItems, totalPrice } = useAppSelector((state) => state.cart)
  const totalPriceWithDecimal = totalPrice.toFixed(2)

  const onOrderClick = () => {
    if (!userId) {
      dispatch(setLoginToOrderError())
      router.push('/pages/login/login-page')
      return
    }
    router.push('/pages/confirm-order/confirm-order')
  }

  const orderItems = (
    <div className="fixed w-full bottom-0 flex flex-row justify-between items-center gap-2 bg-tertiaryGold text-whiteFloral px-3 py-2 z-50">
      <p className="bg-primaryRed w-[2rem] text-center md:mx-4">
        {numOfOrderItems}
      </p>
      <p onClick={onOrderClick} className="bg-primaryRed p-2">
        Checkout
      </p>
      <p className="bg-primaryRed p-2 md:mx-4">£{totalPriceWithDecimal}</p>
    </div>
  )

  return <>{numOfOrderItems > 0 ? orderItems : null}</>
}
