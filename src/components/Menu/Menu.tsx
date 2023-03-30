import { FoodMenuItem } from './MenuItem'
import { MenuItem, MenuItems } from '@/ts/interfaces'

export const Menu = ({ menuItems }: MenuItems) => {
  const mainsMenu = menuItems?.filter((item) => {
    return item.category === 'Mains'
  })

  const mainsMenuItems = mainsMenu.map((menuItem) => {
    const { id, image, name, category, createdAt, price } = menuItem
    return (
      <FoodMenuItem
        key={id}
        id={id}
        category={category}
        createdAt={createdAt}
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
