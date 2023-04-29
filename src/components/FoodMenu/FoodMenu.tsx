import { FoodSection } from '@/components'
import { TSFoodMenuItems, TSFoodByCategory } from '@/ts/interfaces'
import { splitFoodByCategory } from './splitFoodByCategory'

export const FoodMenu = ({ menuItems }: TSFoodMenuItems) => {
  const foodSplitByCatergory = splitFoodByCategory(menuItems)

  //----------------------------------------------------------------------------------
  const foodCatergory = foodSplitByCatergory.map(
    (foodCategory: TSFoodByCategory) => {
      const { category, foodItems } = foodCategory
      return (
        <FoodSection key={category} category={category} foodItems={foodItems} />
      )
    }
  )
  //----------------------------------------------------------------------------------

  return (
    <section className="flex items-center justify-center flex-col min-w-[320px] mb-10">
      <h1 className="text-3xl w-[15rem] bg-primaryPink text-tertiaryGold text-center p-3 m-3">
        Menu
      </h1>
      {foodCatergory}
    </section>
  )
}
