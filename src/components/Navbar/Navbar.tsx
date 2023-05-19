import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavItems } from './NavItems'
import { useAppDispatch } from '@/redux/store/reduxHooks'
import { getAuthUser } from '@/redux/slices/userSlice'
import { Phone, Menu } from 'iconoir-react'
import { MobileNav } from '@/components'

export const Navbar = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false)
  const dispatch = useAppDispatch()
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      await dispatch(getAuthUser())
    }
    getUser()
  }, [dispatch])

  const onMobileMenuClick = () => {
    const pathName = router.pathname
    console.log('pathName', pathName)
    setToggleMobileMenu((prevState) => {
      return !prevState
    })
  }

  return (
    <header className="relative h-[3rem] w-screen md:h-[4rem]">
      {toggleMobileMenu ? <MobileNav onClick={onMobileMenuClick} /> : null}
      <nav className="fixed top-0 z-40 flex h-[3rem] w-screen min-w-[280px] flex-row items-center justify-between bg-primaryPink text-secondaryWhite md:h-[4rem]">
        <Menu
          className="fill-floralWhite ml-4 cursor-pointer md:mx-8 lg:hidden"
          height={25}
          width={25}
          onClick={onMobileMenuClick}
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
            <Phone
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
