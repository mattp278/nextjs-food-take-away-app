import { createElement } from 'react'
import { IconContext } from 'react-icons'
import { IconType } from 'react-icons'

interface NavItemProps {
  icon: IconType
  onClick?: () => void
}

export const NavItem = ({ icon, onClick }: NavItemProps) => {
  return (
    <IconContext.Provider
      value={{
        size: '2rem',
        className: 'fill-tertiaryGold',
      }}
    >
      <div className="">{createElement(icon)}</div>
    </IconContext.Provider>
  )
}
