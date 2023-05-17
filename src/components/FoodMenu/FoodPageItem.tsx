import Image from 'next/image'
import { LinkButton } from '@/components'
import { TSFoodMenuItem } from '@/ts/interfaces'

interface TSFoodItemResponse {
  foodItem: TSFoodMenuItem
}

export const FoodPageItem = (foodItem: TSFoodItemResponse) => {
  const { name, image, price } = foodItem.foodItem

  return (
    <article className="flex flex-col items-center w-11/12 lg:w-1/2 rounded-xl shadow-2xl m-4 md:m-8">
      <div className="relative w-full h-[10rem] md:h-[20rem]">
        <Image
          src={`/foodImages/${image}`}
          fill
          className="object-cover rounded-t-xl"
          alt={name}
          quality={30}
          sizes="(max-width: 600px) 300px, 500px"
        />
      </div>

      <div className="flex flex-col items-center justify-between w-full rounded-xl bg-white">
        <p className="text-3xl m-2">{name}</p>
        <p className="w-[6rem] text-center text-lg">{price}</p>
        <p className="text-justify mx-4 my-2 md:mx-6 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <div className="flex justify-center p-3">
          <LinkButton
            href="/pages/food-menu/food-menu"
            text="Back to Menu"
            type="button"
            optionalClassNames="p-4 mb-4"
          />
        </div>
      </div>

      {/* <div className="relative h-[10rem] w-full ">
        <Image
          src={`/foodImages/${image}`}
          width={600}
          height={400}
          style={{ objectFit: 'cover' }}
          alt={name}
          quality={30}
          sizes="(max-width: 600px) 300px, 500px"
        />
      </div>

      <div>
        <div className="flex items-center justify-between min-h-[3rem] bg-primaryPink">
          <p className="text-white  m-2">{name}</p>
          <p className="text-white h-[3rem] w-[6rem] flex items-center text-center text-sm bg-tertiaryBlack p-2">
            {price}
          </p>
        </div>
        <p className="text-white text-center m-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&aposs standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <div className="flex justify-center p-3">
          <LinkButton
            href="/pages/food-menu/food-menu"
            text="Back to Menu"
            type="button"
          />
        </div>
      </div> */}
    </article>
  )
}
