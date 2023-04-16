import { createElement } from 'react'
import Link from 'next/link'
import { IconoirProvider } from 'iconoir-react'

interface NavItemProps {
  icon: any
  link: string
}

export const NavItem = ({ icon, link }: NavItemProps) => {
  return (
    <IconoirProvider
      iconProps={{
        color: '#c9b064',
        strokeWidth: 2,
        width: '1.8em',
        height: '1.8em',
      }}
    >
      <Link href={link}>
        <div className="">{createElement(icon)}</div>
      </Link>
    </IconoirProvider>
  )
}
