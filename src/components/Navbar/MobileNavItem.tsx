import { createElement } from 'react'
import Link from 'next/link'
import { IconoirProvider } from 'iconoir-react'

interface MobileNavItemProps {
  icon: any
  link: string
  name: string
}

export const MobileNavItem = ({ icon, link, name }: MobileNavItemProps) => {
  return (
    <IconoirProvider
      iconProps={{
        color: '#ffffff',
        strokeWidth: 2,
        width: '1.2em',
        height: '1.2em',
      }}
    >
      <Link href={link} className="flex items-center gap-2">
        <div className="">{createElement(icon)}</div>
        <p className="w-full text-2xl whitespace-nowrap text-secondaryWhite">
          {name}
        </p>
      </Link>
    </IconoirProvider>
  )
}
