import { MobileNav } from '@/components'
import { getAuthUser, toggleMobileMenu } from '@/redux/slices/userSlice'
import { useAppDispatch, useAppSelector } from '@/redux/store/reduxHooks'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { BsTelephone } from "react-icons/bs"
import { RxHamburgerMenu } from "react-icons/rx"
import { NavItems } from './NavItems'

export const Navbar = () => {
  const dispatch = useAppDispatch()
  const { mobileMenuIsOpen } = useAppSelector((state) => state.user)

  useEffect(() => {
    const getUser = async () => {
      await dispatch(getAuthUser())
    }
    getUser()
  }, [dispatch])

  const handleToggleMobileMenu = () => {
    dispatch(toggleMobileMenu())
  }

  return (
    <header className="relative h-[3rem] w-screen md:h-[4rem]">
      {mobileMenuIsOpen ? <MobileNav onClick={handleToggleMobileMenu} /> : null}
      <nav className="fixed top-0 z-40 flex h-[3rem] w-screen min-w-[280px] flex-row items-center justify-between bg-primaryPink text-secondaryWhite md:h-[4rem]">
        <RxHamburgerMenu
          className="fill-floralWhite ml-4 cursor-pointer md:mx-8 lg:hidden"
          height={25}
          width={25}
          onClick={handleToggleMobileMenu}
        />
        <Link href="/">
          <div className="relative min-h-[2.5rem] min-w-[10rem] md:min-h-[3rem] md:min-w-[14rem] lg:ml-6 ">
            <Image
              src="/curry_club_white_sm.png"
              fill
              style={{ objectFit: 'contain' }}
              alt="Indian Platter"
              sizes="(max-width: 600px) 200px, 300px"
            />
          </div>
        </Link>

        <div className="mr-4 flex items-end gap-2 md:mx-8">
          <div className="relative hidden lg:block ">
            <NavItems />
          </div>
          <a href={'tel:02088888888'}>
            <BsTelephone
              className="block cursor-pointer lg:hidden"
              height={25}
              width={25}
            />
          </a>
        </div>
      </nav>
    </header>
  )
}
