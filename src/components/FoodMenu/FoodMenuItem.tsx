import { useState } from 'react'
import { TSFoodMenuItem } from '@/ts/interfaces'
import Image from 'next/image'
import { Button } from '@/components'
import { addCartItem } from '@/redux/slices/cartSlice'
import { useAppDispatch } from '@/redux/store/reduxHooks'
import { IconContext } from 'react-icons'
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi'
import { AiFillInfoCircle } from 'react-icons/ai'
import { useRouter } from 'next/router'

export const FoodMenuItem = ({
  id,
  image,
  name,
  category,
  price,
}: TSFoodMenuItem) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [quantity, setQuantity] = useState<number>(1)

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

  const handleMoreInfoClick = () => {
    router.push(`${id}`)
  }

  return (
    <IconContext.Provider
      value={{ color: 'white', size: '24px', display: 'inline' }}
    >
      <article className="w-11/12 min-w-[250px] max-w-[20rem] m-4">
        <div className="relative h-[10rem]">
          <div
            onClick={handleMoreInfoClick}
            className="absolute min-w-[8rem] flex gap-2 justify-center z-10 bottom-0 bg-primaryRed p-1 m-3"
          >
            <p className="text-white">More info</p>
            <AiFillInfoCircle className="text-white inline" size="24px" />
          </div>
          <div className="absolute min-w-[6rem] flex flex-row justify-between items-center gap-2 right-0 bottom-0 z-10 bg-primaryRed p-1 m-3 ">
            <FiMinusCircle size="24px" onClick={handleQuantityDecrease} />
            <p className="text-white">{quantity}</p>
            <FiPlusCircle
              className="text-white"
              size="24px"
              onClick={handleQuantityIncrease}
            />
          </div>
          <Image
            src={`/foodImages/${image}`}
            fill
            style={{ objectFit: 'cover' }}
            alt={name}
            quality={30}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
        <div className="flex items-center justify-between min-h-[3rem] bg-primaryRed">
          <p className="text-white  m-2">{name}</p>
          <p
            className="text-white h-[3rem] w-[6rem] flex items-center text-center text-sm bg-quinaryOrange p-2"
            onClick={handleAddtoCart}
          >
            Add for £{(quantity * price).toFixed(2)}
          </p>
        </div>
      </article>
    </IconContext.Provider>
  )
}
