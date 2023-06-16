import { useSession } from 'next-auth/react'
import { NavItem } from './NavItem'
import { navItemsList } from './NavItemsList'

export const NavItems = () => {
  const { data: session, status } = useSession()

  const NavItems = navItemsList.map((item) => {
    const { id, Icon, link, name, telephoneHref, sessionReq } = item
    if (session && name === 'Login') {
      return null
    }
    if (session && sessionReq) {
      return (
        <NavItem
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
        <NavItem
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
    <div className="w-5/6 flex flex-row justify-between gap-8">{NavItems}</div>
  )
}
