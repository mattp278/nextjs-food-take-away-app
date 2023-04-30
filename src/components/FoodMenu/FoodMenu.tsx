import { FoodSection } from '@/components'
import { TSFoodMenuItems, TSFoodByCategory } from '@/ts/interfaces'
import { splitFoodByCategory } from './splitFoodByCategory'
import { LinkButton } from '@/components'

export const FoodMenu = ({ menuItems }: TSFoodMenuItems) => {
  const foodSplitByCatergory = splitFoodByCategory(menuItems)

  const categorys = foodSplitByCatergory.map((foodCatergory) => {
    const { category } = foodCatergory
    const capitalizedCategory =
      category.charAt(0).toUpperCase() + category.slice(1)
    return capitalizedCategory
  })

  const categoryButtons = categorys.map((category) => {
    return (
      <LinkButton
        key={category}
        type="button"
        href="/"
        text={category}
        optionalClassNames="text-xl x-2 h-[1.8rem] rounded-3xl text-sm p-0 px-4 m-1 md:mx-2"
      />
    )
  })

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
    <nav className="flex items-center justify-center flex-col min-w-[320px] w-full mb-10 bg-secondaryWhite">
      <div className="w-full text-center p-1 bg-quaternaryGrey">
        {categoryButtons}
      </div>
      {foodCatergory}
    </nav>
  )
}
