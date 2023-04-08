import { navItemsList } from './NavItemsList'
import { NavItem } from './NavItem'

export const NavItems = () => {
  const NavItems = navItemsList.map((item) => {
    const { id, icon, link } = item
    return <NavItem key={id} icon={icon} link={link} />
  })

  return (
    <div className="w-5/6 flex flex-row justify-between md:justify-end md:pr-6 gap-4">
      {NavItems}
    </div>
  )
}
