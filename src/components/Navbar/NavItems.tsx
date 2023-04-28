import { navItemsList } from './NavItemsList'
import { NavItem } from './NavItem'

export const NavItems = () => {
  const NavItems = navItemsList.map((item) => {
    const { id, icon, link, name } = item
    return <NavItem key={id} icon={icon} link={link} name={name} />
  })

  return (
    <div className="w-5/6 flex flex-row justify-between gap-8">{NavItems}</div>
  )
}
