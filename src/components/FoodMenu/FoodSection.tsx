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
    <div className="relative w-full md:w-11/12 lg:w-full flex items-center justify-start flex-row flex-wrap mb-5 mt-5 lg:px-10 ">
      <div className="w-full  flex items-center justify-start flex-row flex-wrap gap-1 ">
        <h2 className="text-2xl w-full capitalize font-bold text-tertiaryBlack pl-3">
          {category}
        </h2>
        <div className="w-full flex flex-wrap justify-center gap-4 ">
          {foodItemsByCategory}
        </div>
      </div>
    </div>
  )
}
