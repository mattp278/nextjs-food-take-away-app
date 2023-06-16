import { useSession } from 'next-auth/react'
import { MobileNavItem } from './MobileNavItem'
import { navItemsList } from './NavItemsList'

export const MobileNavItems = () => {
  const { data: session, status } = useSession()

  const NavItems = navItemsList.map((item) => {
    const { id, Icon, link, name, telephoneHref, sessionReq } = item
    if (session && name === 'Login') {
      return null
    }
    if (session && sessionReq) {
      return (
        <MobileNavItem
          key={id}
          Icon={Icon}
          link={link}
          name={name}
          telephoneHref={telephoneHref}
        />
      )
    }
    if (!sessionReq) {
      return (
        <MobileNavItem
          key={id}
          Icon={Icon}
          link={link}
          name={name}
          telephoneHref={telephoneHref}
        />
      )
    }
  })

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8">
      {NavItems}
    </div>
  )
}
