import { useAppSelector } from '@/redux/store/reduxHooks'
import { Button } from '../ui/Button'

export const OrderFooter = () => {
  const { numOfOrderItems, totalPrice } = useAppSelector((state) => state.cart)
  const totalPriceWithDecimal = totalPrice.toFixed(2)
  const orderItems = (
    <div className="fixed w-11/12 bottom-0 flex flex-row justify-between items-center gap-2 rounded-md bg-primaryRed text-whiteFloral px-3 py-2 m-2 z-50">
      <p className="bg-tertiaryGold w-[2rem] text-center ">{numOfOrderItems}</p>
      <p>View Basket</p>
      <p>£{totalPriceWithDecimal}</p>
    </div>
  )

  return <>{numOfOrderItems > 0 ? orderItems : null}</>
}
