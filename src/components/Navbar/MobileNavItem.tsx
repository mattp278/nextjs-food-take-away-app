import { createElement } from 'react'
import Link from 'next/link'
import { IconoirProvider } from 'iconoir-react'
import { useRouter } from 'next/router'
import { toggleMobileMenu } from '@/redux/slices/userSlice'
import { useAppDispatch } from '@/redux/store/reduxHooks'

interface MobileNavItemProps {
  icon: any
  link: string
  name: string
  telephoneHref?: string
}

export const MobileNavItem = ({
  icon,
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
          <p className="w-full whitespace-nowrap text-2xl text-secondaryWhite">
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
      <a onClick={onLinkClick} className="flex items-center gap-2">
        <div className="">{createElement(icon)}</div>
        <p className="w-full whitespace-nowrap text-2xl text-secondaryWhite">
          {name}
        </p>
      </a>
    </IconoirProvider>
  )
}
