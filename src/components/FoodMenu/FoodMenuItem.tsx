import { Button } from '@/components'
import { addCartItem } from '@/redux/slices/cartSlice'
import { useAppDispatch } from '@/redux/store/reduxHooks'
import { TSFoodMenuItem } from '@/ts/interfaces'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai"

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
      <article className="h-[10rem] flex basis-11/12 md:basis-full items-center border-2 border-black/25 rounded-xl bg-secondaryWhite">
        <div className="w-8/12 h-full flex flex-col justify-between p-4">
          <p className="text-lg">{name}</p>
          <p className="text-md">{price}</p>
          <div className="grow flex items-end">
            <Button
              text="Add to cart"
              type="button"
              optionalClassNames="bg-primaryPink text-secondaryWhite p-2 cursor-pointer bottom-0"
              onClick={handleAddtoCart}
            />
          </div>
        </div>

        <div className="relative w-4/12 h-5/6 m-4">
          <p
            className="absolute text-sm text-center text-white bg-primaryPink right-2 bottom-2 rounded-lg cursor-pointer z-10 p-1"
            onClick={handleMoreInfoClick}
          >
            <AiOutlineInfoCircle strokeWidth={2} />
          </p>
          <Image
            src={`/foodImages/${image}`}
            fill
            style={{ objectFit: 'cover', borderRadius: '8px' }}
            alt={name}
            quality={50}
            sizes="(max-width: 600px) 100px, 200px"
          />
        </div>
      </article>
    </>
  )
}
