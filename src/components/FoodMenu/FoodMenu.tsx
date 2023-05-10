import { FoodSection, LinkButton, CartSection } from '@/components'
import { TSFoodMenuItems, TSFoodByCategory } from '@/ts/interfaces'
import { splitFoodByCategory } from './splitFoodByCategory'

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
        href="/pages/food-menu/food-menu"
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
    <section className="flex items-center justify-center flex-col min-w-[320px] mb-20 bg-quaternaryGrey/25">
      <nav className="w-screen text-center p-1 bg-quaternaryGrey">
        {categoryButtons}
      </nav>
      <div className="w-full flex lg:gap-5">
        <div className="flex flex-col items-center grow max-w-[1000px]">
          {foodCatergory}
        </div>
        <div className="grow sm:hidden md:hidden lg:block self-start p-10 mr-14">
          <CartSection />
        </div>
      </div>
    </section>
  )
}
