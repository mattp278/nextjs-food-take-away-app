import { navItemsList } from './NavItemsList'
import { MobileNavItem } from './MobileNavItem'

export const MobileNavItems = () => {
  const NavItems = navItemsList.map((item) => {
    const { id, icon, link, name } = item
    return <MobileNavItem key={id} icon={icon} link={link} name={name} />
  })

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-8">
      {NavItems}
    </div>
  )
}
