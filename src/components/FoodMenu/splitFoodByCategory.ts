import { TSFoodMenuItem, TSFoodByCategory } from '@/ts/interfaces'
import { FoodCategory } from '@prisma/client'

export const splitFoodByCategory = (foodItems: TSFoodMenuItem[]) => {
  const foodCategorys = Object.values(FoodCategory)
  const foodItemByCategory: TSFoodByCategory[] = []
  console.log('foodItemByCategory', foodItemByCategory)

  foodCategorys.forEach((category) => {
    const foodItemsInCategory = foodItems.filter(
      (foodItem) => foodItem.category === category
    )
    foodItemByCategory.push({ category, foodItems: foodItemsInCategory })
  })

  return foodItemByCategory
}
