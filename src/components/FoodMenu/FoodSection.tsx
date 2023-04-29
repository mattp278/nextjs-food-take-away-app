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
    <div className="relative w-full md:w-11/12 flex items-center justify-center flex-col flex-wrap mb-10 ">
      <h2 className="text-2xl w-full capitalize font-bold text-tertiaryBlack pl-3">
        {category}
      </h2>

      <div className="w-full flex items-center justify-center flex-row flex-wrap ">
        {foodItemsByCategory}
      </div>
    </div>
  )
}
