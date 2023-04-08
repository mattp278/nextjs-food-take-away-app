import { createElement } from 'react'
import { IconContext } from 'react-icons'
import { IconType } from 'react-icons'
import Link from 'next/link'

interface NavItemProps {
  icon: IconType
  link: string
}

export const NavItem = ({ icon, link }: NavItemProps) => {
  return (
    <IconContext.Provider
      value={{
        size: '2rem',
        className: 'fill-tertiaryGold',
      }}
    >
      <Link href={link}>
        <div className="">{createElement(icon)}</div>
      </Link>
    </IconContext.Provider>
  )
}
