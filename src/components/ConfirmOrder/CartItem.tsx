import { FoodMenuItemInterface } from '@/ts/interfaces'
import Image from 'next/image'

export const CartItem = ({
  id,
  image,
  name,
  category,
  price,
  quantity,
}: FoodMenuItemInterface) => {
  const priceToFixed = price.toFixed(2)

  return (
    <article className="w-full">
      <div className="flex flex-row justify-between items-center m-1 bg-primaryRed">
        <div className="relative min-h-[3rem] w-3/12 ">
          <Image
            src={`/foodImages/${image}`}
            fill
            style={{ objectFit: 'cover' }}
            alt={name}
            quality={30}
          />
        </div>

        <p className="text-white w-5/12 m-1 pl-2">{name}</p>
        <p className="text-white w-2/12 m-1">{quantity}</p>
        <p className="text-white w-2/12 m-1">{priceToFixed}</p>
      </div>
    </article>
  )
}
