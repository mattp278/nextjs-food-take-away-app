import { FoodItem, TSFoodByCategory } from '../../types'
import { FoodCategory } from '@prisma/client'

export const splitFoodByCategory = (foodItems: FoodItem[]) => {
  const foodCategorys = Object.values(FoodCategory)
  const foodItemByCategory: TSFoodByCategory = []

  foodCategorys.forEach((category) => {
    const foodItemsInCategory = foodItems.filter(
      (foodItem) => foodItem.category === category
    )
    foodItemByCategory.push({ category, foodItems: foodItemsInCategory })
  })

  return foodItemByCategory
}
