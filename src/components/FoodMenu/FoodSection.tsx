import { TSFoodByCategory } from '@/ts/interfaces'
import { FoodMenuItem } from '@/components'

export const FoodSection = ({ category, foodItems }: TSFoodByCategory) => {
  //----------------------------------------------------------------------------------
  const foodItemsByCategory = foodItems.map((foodItem) => {
    const { id, name, price, image } = foodItem
    return (
      <FoodMenuItem
        key={id}
        id={id}
        name={name}
        category={category}
        price={price}
        image={image}
      />
    )
  })
  //----------------------------------------------------------------------------------

  return (
    <div className="relative w-full md:w-11/12 flex items-center justify-start flex-row flex-wrap mb-5 mt-5">
      <div className="w-full lg:w-[600px] flex items-center justify-start flex-row flex-wrap gap-1 ">
        <h2 className="text-2xl w-full capitalize font-bold text-tertiaryBlack pl-3">
          {category}
        </h2>
        {foodItemsByCategory}
      </div>
    </div>
  )
}
