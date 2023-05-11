import { createElement } from 'react'
import Link from 'next/link'
import { IconoirProvider } from 'iconoir-react'

interface NavItemProps {
  icon: any
  link: string
  name: string
  telephoneHref?: string
}

export const NavItem = ({ icon, link, name, telephoneHref }: NavItemProps) => {
  if (telephoneHref) {
    return (
      <IconoirProvider
        iconProps={{
          color: '#ffffff',
          strokeWidth: 2,
          width: '1.2em',
          height: '1.2em',
        }}
      >
        <a href={telephoneHref} className="flex items-center gap-2">
          <div className="">{createElement(icon)}</div>
          <p className="w-full text-xl whitespace-nowrap text-secondaryWhite">
            {name}
          </p>
        </a>
      </IconoirProvider>
    )
  }

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
        <p className="w-full text-xl whitespace-nowrap text-secondaryWhite">
          {name}
        </p>
      </Link>
    </IconoirProvider>
  )
}
