import { FoodMenuItemInterface } from '@/ts/interfaces'
import Image from 'next/image'

export const FoodMenuItem = ({
  id,
  image,
  name,
  category,
  price,
}: FoodMenuItemInterface) => {
  return (
    <div className="relative w-5/6 h-[10rem]">
      <p className="relative z-10 text-white">{name}</p>
      <Image
        src={`/foodImages/${image}`}
        fill
        style={{ objectFit: 'cover' }}
        alt={name}
        quality={30}
      />
    </div>
  )
}
