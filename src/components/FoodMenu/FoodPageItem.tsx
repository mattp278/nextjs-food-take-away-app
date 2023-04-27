import Image from 'next/image'
import { LinkButton } from '@/components'
import { TSFoodMenuItem } from '@/ts/interfaces'

interface TSFoodItemResponse {
  foodItem: TSFoodMenuItem
}

export const FoodPageItem = (foodItem: TSFoodItemResponse) => {
  const { name, image, price } = foodItem.foodItem

  return (
    <article className="w-11/12 min-w-[250px] max-w-[40rem] m-4">
      <div className="relative h-[10rem] ">
        <Image
          src={`/foodImages/${image}`}
          fill
          style={{ objectFit: 'cover' }}
          alt={name}
          quality={30}
        />
      </div>

      <div className="flex items-center justify-between min-h-[3rem] bg-primaryRed">
        <p className="text-white  m-2">{name}</p>
        <p className="text-white h-[3rem] w-[6rem] flex items-center text-center text-sm bg-quinaryOrange p-2">
          {price}
        </p>
      </div>
      <p className="text-white text-center m-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&aposs standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </p>
      <div className="flex justify-center p-3">
        <LinkButton
          href="/pages/food-menu/food-menu"
          text="Back to Menu"
          type="button"
        />
      </div>
    </article>
  )
}
