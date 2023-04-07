import { useState } from 'react'
import { FoodMenuItemInterface } from '@/ts/interfaces'
import Image from 'next/image'
import { Button } from '@/components'
import { addCartItem } from '@/redux/slices/cartSlice'
import { useAppDispatch } from '@/redux/store/reduxHooks'
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi'

export const FoodMenuItem = ({
  id,
  image,
  name,
  category,
  price,
}: FoodMenuItemInterface) => {
  const dispatch = useAppDispatch()
  const [quantity, setQuantity] = useState<number>(1)
  const priceWithDecimal = parseInt(price.toFixed(2))

  const handleAddtoCart = () => {
    dispatch(addCartItem({ id, name, category, price, image, quantity }))
  }

  const handleQuantityIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const handleQuantityDecrease = () => {
    if (quantity === 1) return
    setQuantity((prevQuantity) => prevQuantity - 1)
  }

  return (
    <article className="w-11/12 min-w-[250px] max-w-[20rem] m-4">
      <div className="relative h-[10rem] ">
        <div className="absolute min-w-[6rem] flex flex-row justify-between items-center gap-2 right-0 bottom-0 z-20 bg-primaryRed p-1 m-3 ">
          <FiMinusCircle
            className="text-white"
            size="1.5rem"
            onClick={handleQuantityDecrease}
          />
          <p className="text-white">{quantity}</p>
          <FiPlusCircle
            className="text-white"
            size="1.5rem"
            onClick={handleQuantityIncrease}
          />
        </div>
        <Image
          src={`/foodImages/${image}`}
          fill
          style={{ objectFit: 'cover' }}
          alt={name}
          quality={30}
        />
      </div>
      <div className="flex items-center justify-between min-h-[3rem] bg-tertiaryGold">
        <p className="text-white m-2">{name}</p>
        <p
          className="text-white h-[3rem] w-[6rem] flex items-center text-center text-sm bg-primaryRed p-2"
          onClick={handleAddtoCart}
        >
          Add for £{(quantity * priceWithDecimal).toFixed(2)}
        </p>
      </div>
    </article>
  )
}
