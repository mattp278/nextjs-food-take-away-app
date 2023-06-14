import { toggleMobileMenu } from '@/redux/slices/userSlice'
import { useAppDispatch } from '@/redux/store/reduxHooks'
import { useRouter } from 'next/router'
import { IconType } from 'react-icons'

interface MobileNavItemProps {
  Icon: IconType
  link: string
  name: string
  telephoneHref?: string
}

export const MobileNavItem = ({
  Icon,
  link,
  name,
  telephoneHref,
}: MobileNavItemProps) => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const onLinkClick = () => {
    if (!telephoneHref) {
      setTimeout(() => {
        router.push(link)
        dispatch(toggleMobileMenu())
      }, 500)
    }
  }

  if (telephoneHref) {
    return (
      <div
      
      >
        <a href={telephoneHref} className="flex items-center gap-2">
          <Icon />
          <p className="w-full whitespace-nowrap text-2xl text-secondaryWhite">
            {name}
          </p>
        </a>
      </div>
    )
  }

  return (
    <div
    
    >
      <a onClick={onLinkClick} className="flex items-center gap-2">
      <Icon />
        <p className="w-full whitespace-nowrap text-2xl text-secondaryWhite">
          {name}
        </p>
      </a>
    </div>
  )
}
