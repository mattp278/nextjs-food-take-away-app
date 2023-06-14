import { MdOutlineCancel } from 'react-icons/md'
import { MobileNavItems } from './MobileNavItems'

interface MobileNavProps {
  onClick: () => void
}

export const MobileNav = ({ onClick }: MobileNavProps) => {
  return (
    <nav className="fixed top-0 w-screen min-h-screen bg-primaryPink z-50">
      <div className="absolute top-4 right-6" onClick={onClick}>
        <MdOutlineCancel className="text-secondaryWhite" width={35} height={35} />
      </div>
      <div className="w-full h-screen">
        <MobileNavItems />
      </div>
    </nav>
  )
}
