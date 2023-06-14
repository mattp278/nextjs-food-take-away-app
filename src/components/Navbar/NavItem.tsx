import Link from 'next/link'
import { IconType } from 'react-icons'

interface NavItemProps {
  Icon: IconType
  link: string
  name: string
  telephoneHref?: string
}

export const NavItem = ({ Icon, link, name, telephoneHref }: NavItemProps) => {
  if (telephoneHref) {
    return (
      <div
      
      >
        <a href={telephoneHref} className="flex items-center gap-2">
          <Icon/>
          <p className="w-full whitespace-nowrap text-xl text-secondaryWhite">
            {name}
          </p>
        </a>
      </div>
    )
  }

  return (
    <div
     
    >
      <Link href={link} className="flex items-center gap-2">
        <Icon/>
        <p className="w-full whitespace-nowrap text-xl text-secondaryWhite">
          {name}
        </p>
      </Link>
    </div>
  )
}
