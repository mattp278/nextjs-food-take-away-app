import { FoodMenuItem } from './MenuItem'
import { MenuItem, MenuItems } from '@/ts/interfaces'

export const Menu = ({ menuItems }: MenuItems) => {
  const mainsMenu = menuItems?.filter((item) => {
    return item.category === 'Mains'
  })

  const mainsMenuItems = mainsMenu.map((menuItem) => {
    console.log('menuItem', menuItem)
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
    <>
      <h1 className="text-3xl bg-primaryRed text-tertiaryGold p-3 m-3">Menu</h1>
      {mainsMenuItems}
    </>
  )
}
