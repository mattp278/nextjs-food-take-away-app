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
      <article className="w-full h-[85px] md:h-[125px] flex flex-row border-b-2 first:border-t-2 last:border-b-2 border-primaryPink">
        <div className="grow flex flex-col justify-between w-full ">
          <div className="my-0.5 mx-4 leading-tight text-primaryPink">
            <p className="text-xl font-bold ">{name}</p>
            <p className="text-base ">Description</p>
            <p className="text-lg">{price}</p>
          </div>
        </div>
        <div className="relative w-1/2 h-11/12 max-w-[14rem]">
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
      </article>
    </>
  )
}
