import { FoodMenuItem } from '@/components'
import { FoodMenuItemsInterface } from '@/ts/interfaces'

export const FoodMenu = ({ menuItems }: FoodMenuItemsInterface) => {
  const mainsMenu = menuItems?.filter((item) => {
    return item.category === 'Mains'
  })

  const starterMenu = menuItems?.filter((item) => {
    return item.category === 'Starter'
  })

  const starterMenuItems = starterMenu.map((menuItem) => {
    const { id, image, name, category, price } = menuItem
    return (
      <FoodMenuItem
        key={id}
        id={id}
        category={category}
        image={image}
        name={name}
        price={price}
      />
    )
  })

  const mainsMenuItems = mainsMenu.map((menuItem) => {
    const { id, image, name, category, price } = menuItem
    return (
      <FoodMenuItem
        key={id}
        id={id}
        category={category}
        image={image}
        name={name}
        price={price}
      />
    )
  })

  return (
    <section className="flex items-center justify-center flex-col min-w-[320px]">
      <h1 className="text-3xl w-[15rem] bg-primaryRed text-tertiaryGold p-3 m-3">
        Menu
      </h1>

      <div className="w-screen flex items-center justify-center flex-row flex-wrap gap-5">
        <h2 className="text-2xl w-[15rem] bg-primaryRed text-tertiaryGold p-3 m-3">
          Starters
        </h2>
        {starterMenuItems}
      </div>
      <h2 className="text-2xl w-[15rem] bg-primaryRed text-tertiaryGold p-3 m-3">
        Mains
      </h2>
      <div className="w-screen flex items-center justify-center flex-row flex-wrap gap-5">
        {mainsMenuItems}
      </div>
    </section>
  )
}
