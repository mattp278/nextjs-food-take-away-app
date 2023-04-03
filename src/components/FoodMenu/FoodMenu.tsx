import { FoodMenuItem, FoodSection } from '@/components'
import {
  FoodMenuItemsInterface,
  FoodMenuItemsByCategoryInterface,
} from '@/ts/interfaces'
import { splitFoodByCategory } from './splitFoodByCategory'

export const FoodMenu = ({ menuItems }: FoodMenuItemsInterface) => {
  const foodSplitByCatergory = splitFoodByCategory(menuItems)

  //----------------------------------------------------------------------------------
  const foodCatergoryItems = foodSplitByCatergory.map(
    (foodCategory: FoodMenuItemsByCategoryInterface) => {
      return (
        <FoodSection
          key={foodCategory.category}
          category={foodCategory.category}
          foodItems={foodCategory.foodItems}
        />
      )
    }
  )
  //----------------------------------------------------------------------------------

  return (
    <section className="flex items-center justify-center flex-col min-w-[320px]">
      <h1 className="text-3xl w-[15rem] bg-primaryRed text-tertiaryGold text-center p-3 m-3">
        Menu
      </h1>
      {foodCatergoryItems}
    </section>
  )
}
