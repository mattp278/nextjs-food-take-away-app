import { MobileNavItems } from './MobileNavItems'
import { Cancel } from 'iconoir-react'

interface MobileNavProps {
  onClick: () => void
}

export const MobileNav = ({ onClick }: MobileNavProps) => {
  return (
    <nav className="absolute w-screen min-h-screen bg-primaryPink z-50">
      <div className="absolute top-4 right-6" onClick={onClick}>
        <Cancel className="text-secondaryWhite" width={35} height={35} />
      </div>
      <div className="w-full h-screen">
        <MobileNavItems />
      </div>
    </nav>
  )
}
