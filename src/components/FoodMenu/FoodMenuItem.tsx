import { FoodMenuItemInterface } from '@/ts/interfaces'
import Image from 'next/image'
import { Button } from '@/components'

export const FoodMenuItem = ({
  id,
  image,
  name,
  category,
  price,
}: FoodMenuItemInterface) => {
  const priceWithDecimal = price.toFixed(2)

  return (
    <article className="w-5/6 min-w-[250px] max-w-[20rem] m-4">
      <div className="relative h-[10rem]">
        <Image
          src={`/foodImages/${image}`}
          fill
          style={{ objectFit: 'cover' }}
          alt={name}
          quality={30}
        />
      </div>
      <div className="flex items-center justify-between bg-tertiaryGold">
        <p className=" text-white p-3">{name}</p>
        <p className="bg-tertiaryGold text-white p-3">{priceWithDecimal}</p>
        <Button text="Add To Cart" type="button" optionalClassNames="" />
      </div>
    </article>
  )
}
