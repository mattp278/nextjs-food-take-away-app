import Image from 'next/image'
import Link from 'next/link'
import { IconContext } from 'react-icons'
import { NavItems } from './NavItems'
import { useAppDispatch } from '@/redux/store/reduxHooks'
import { resetAllState } from '@/redux/store/store'

export const Navbar = () => {
  const dispatch = useAppDispatch()

  const onDevelopmentClick = () => {
    if (process.env.NODE_ENV === 'development') {
      dispatch(resetAllState())
    }
  }

  return (
    <IconContext.Provider
      value={{
        className: 'fill-tertiaryGold',
      }}
    >
      <nav className="fixed top-0 w-screen min-w-[280px] h-[5rem] text-lg flex flex-col md:flex-row items-center justify-center bg-primaryRed text-whiteFloral z-50">
        <Link href="/">
          <div
            onClick={onDevelopmentClick}
            className="relative w-[14rem] md:w-[16rem] min-h-[2.2rem] md:min-h-[5rem] md:left-6"
          >
            <Image
              src="/curry_club_gold_sm.png"
              fill
              style={{ objectFit: 'contain' }}
              alt="Indian Platter"
            />
          </div>
        </Link>
        <NavItems />
      </nav>
    </IconContext.Provider>
  )
}
