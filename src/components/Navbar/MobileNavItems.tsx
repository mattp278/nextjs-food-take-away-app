import { useSession } from 'next-auth/react'
import { navItemsList } from './NavItemsList'
import { MobileNavItem } from './MobileNavItem'

export const MobileNavItems = () => {
  const { data: session, status } = useSession()

  const NavItems = navItemsList.map((item) => {
    const { id, icon, link, name, sessionReq } = item
    if (session && name === 'Login') {
      return null
    }
    if (session && sessionReq) {
      return <MobileNavItem key={id} icon={icon} link={link} name={name} />
    }
    if (!sessionReq) {
      return <MobileNavItem key={id} icon={icon} link={link} name={name} />
    }
  })

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-8">
      {NavItems}
    </div>
  )
}
