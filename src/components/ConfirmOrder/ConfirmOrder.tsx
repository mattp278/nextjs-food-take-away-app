import { useAppSelector, useAppDispatch } from '@/redux/store/reduxHooks'
import { CartItem } from './CartItem'
import Image from 'next/image'
import { BsFillCartFill } from 'react-icons/bs'
import { Button } from '@/components'
import { processOrder, setLoginToOrderError } from '@/redux/slices/cartSlice'

export const ConfirmOrder = () => {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector((state) => state.cart.order)
  const userId = useAppSelector((state) => state.user.id)

  const items = cartItems?.map((item) => {
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

  const onConfirmOrder = () => {
    if (!userId) {
      dispatch(setLoginToOrderError())
      router.push('/pages/login/login-page')
      return
    }
    dispatch(processOrder({ userId, foodItems: cartItems }))
  }

  return (
    <section className="bg-tertiaryGold flex flex-col w-11/12 lg:w-1/2 md:p-5">
      <div className="flex justify-center items-center flex-col p-4">
        <BsFillCartFill size="125px" />
        <h1 className="text-3xl p-2">CHECKOUT</h1>
      </div>
      <div className="flex flex-row justify-between items-center bg-primaryRed m-1 ">
        <div className="relative w-3/12 object-cover"></div>
        <p className="text-white w-5/12 m-1 pl-2 ">Item</p>
        <p className="text-white w-2/12 m-1">Qty</p>
        <p className="text-white w-2/12 m-1">Price</p>
      </div>
      {items}
      <Button
        type="button"
        text="CONFIRM ORDER"
        optionalClassNames="min-w-[200px] md:min-w-[300px] my-5"
        onClick={onConfirmOrder}
      />
    </section>
  )
}
