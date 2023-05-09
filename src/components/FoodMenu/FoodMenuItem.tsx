import { useState } from 'react'
import { TSFoodMenuItem } from '@/ts/interfaces'
import Image from 'next/image'
import { addCartItem } from '@/redux/slices/cartSlice'
import { useAppDispatch } from '@/redux/store/reduxHooks'
import { Plus, Minus, InfoEmpty } from 'iconoir-react'
import { useRouter } from 'next/router'
import { Button } from '@/components'

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
    <>
      <article className="w-full h-[3rem] flex flex-row items-center bg-primaryPink">
        <div className="relative min-h-[3rem] min-w-[3rem] w-3/12">
          <Image
            src={`/foodImages/${image}`}
            fill
            style={{ objectFit: 'cover' }}
            alt={name}
            quality={30}
            sizes="(max-width: 600px) 50px, 100px"
          />
        </div>

        <p className="text-white text-lg leading-tight w-5/12 m-1 pl-2">
          {name}
        </p>
        <p className="text-white text-md w-2/12 m-1 p-1 text-center">{price}</p>
        <p
          className="text-white w-2/12 min-w-[4rem] h-[3rem] flex items-center justify-center text-center text-sm leading-tight md:text-lg md:leading-tight bg-tertiaryBlack px-1"
          onClick={handleAddtoCart}
        >
          Add to Cart
        </p>
      </article>
    </>
  )
}
