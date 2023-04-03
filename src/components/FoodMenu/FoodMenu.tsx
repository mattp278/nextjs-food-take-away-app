import { FoodSection } from '@/components'
import {
  FoodMenuItemsInterface,
  FoodMenuItemsByCategoryInterface,
} from '@/ts/interfaces'
import { splitFoodByCategory } from './splitFoodByCategory'

export const FoodMenu = ({ menuItems }: FoodMenuItemsInterface) => {
  const foodSplitByCatergory = splitFoodByCategory(menuItems)

  //----------------------------------------------------------------------------------
  const foodCatergory = foodSplitByCatergory.map(
    (foodCategory: FoodMenuItemsByCategoryInterface) => {
      const { category, foodItems } = foodCategory
      return (
        <FoodSection key={category} category={category} foodItems={foodItems} />
      )
    }
  )
  //----------------------------------------------------------------------------------

  return (
    <section className="flex items-center justify-center flex-col min-w-[320px]">
      <h1 className="text-3xl w-[15rem] bg-primaryRed text-tertiaryGold text-center p-3 m-3">
        Menu
      </h1>
      {foodCatergory}
    </section>
  )
}
