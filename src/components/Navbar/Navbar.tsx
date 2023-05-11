import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NavItems } from './NavItems'
import { useAppDispatch } from '@/redux/store/reduxHooks'
import { getAuthUser } from '@/redux/slices/userSlice'
import { Phone, Menu } from 'iconoir-react'
import { MobileNav } from '@/components'

export const Navbar = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const getUser = async () => {
      await dispatch(getAuthUser())
    }
    getUser()
  }, [dispatch])

  const onMobileMenuClick = () => {
    setToggleMobileMenu((prevState) => {
      return !prevState
    })
  }

  return (
    <header>
      {toggleMobileMenu ? <MobileNav onClick={onMobileMenuClick} /> : null}
      <nav className="fixed top-0 w-screen min-w-[280px] h-[3rem] md:h-[4rem] flex flex-row justify-between items-center bg-primaryPink text-secondaryWhite z-40">
        <Menu
          className="fill-floralWhite ml-4 md:mx-8 lg:hidden"
          height={25}
          width={25}
          onClick={onMobileMenuClick}
        />
        <Link href="/">
          <div className="relative min-w-[10rem] min-h-[2.5rem] md:min-w-[14rem] md:min-h-[3rem] lg:ml-6 ">
            <Image
              src="/curry_club_white_sm.png"
              fill
              style={{ objectFit: 'contain' }}
              alt="Indian Platter"
              sizes="(max-width: 600px) 200px, 300px"
            />
          </div>
        </Link>

        <div className="flex items-end mr-4 md:mx-8 gap-2">
          <div className="relative hidden lg:block ">
            <NavItems />
          </div>
          <Phone className="block lg:hidden" height={25} width={25} />
        </div>
      </nav>
    </header>
  )
}
