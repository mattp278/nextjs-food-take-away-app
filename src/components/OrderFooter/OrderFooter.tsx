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
      router.push('/pages/login/login-page')
      dispatch(setLoginToOrderError())
      return
    }
    dispatch(processOrder({ userId, foodItems: order }))
  }

  const orderItems = (
    <div className="fixed w-11/12 bottom-0 flex flex-row justify-between items-center gap-2 rounded-md bg-primaryRed text-whiteFloral px-3 py-2 m-2 z-50">
      <p className="bg-tertiaryGold w-[2rem] text-center ">{numOfOrderItems}</p>
      <p onClick={onOrderClick} className="bg-tertiaryGold p-2">
        Place Order
      </p>
      <p>£{totalPriceWithDecimal}</p>
    </div>
  )

  return <>{numOfOrderItems > 0 ? orderItems : null}</>
}
