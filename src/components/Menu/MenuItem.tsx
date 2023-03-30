import { MenuItem } from '@/ts/interfaces'
import Image from 'next/image'

export const FoodMenuItem = ({
  id,
  image,
  name,
  category,
  createdAt,
  price,
}: MenuItem) => {
  return (
    <div className="relative w-5/6 h-[10rem]">
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
