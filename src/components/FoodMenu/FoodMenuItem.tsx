import { useState } from 'react'
import { TSFoodMenuItem } from '@/ts/interfaces'
import Image from 'next/image'
import { addCartItem } from '@/redux/slices/cartSlice'
import { useAppDispatch } from '@/redux/store/reduxHooks'
import { Plus, Minus, InfoEmpty } from 'iconoir-react'
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
    <article className="w-11/12 min-w-[250px] max-w-[20rem] m-4">
      <div className="relative h-[10rem]">
        <div
          onClick={handleMoreInfoClick}
          className="absolute min-w-[8rem] flex gap-2 justify-center z-10 bottom-0 bg-primaryPink p-1 m-3"
        >
          <p className="text-white">More info</p>
          <InfoEmpty
            className="text-secondaryWhite stroke-2"
            height={24}
            width={24}
          />
        </div>
        <div className="absolute min-w-[6rem] flex flex-row justify-between items-center gap-2 right-0 bottom-0 z-10 bg-primaryPink p-1 m-3 ">
          <Minus
            onClick={handleQuantityDecrease}
            className="text-secondaryWhite stroke-2"
            height={24}
            width={24}
          />
          <p className="text-white">{quantity}</p>
          <Plus
            onClick={handleQuantityIncrease}
            className="text-secondaryWhite stroke-2"
            height={24}
            width={24}
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
      <div className="flex items-center justify-between min-h-[3rem] bg-primaryPink">
        <p className="text-white  m-2">{name}</p>
        <p
          className="text-white h-[3rem] w-[6rem] flex items-center text-center text-sm bg-tertiaryBlack p-2"
          onClick={handleAddtoCart}
        >
          Add for £{(quantity * price).toFixed(2)}
        </p>
      </div>
    </article>
  )
}
