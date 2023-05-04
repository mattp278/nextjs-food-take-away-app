import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NavItems } from './NavItems'
import { useAppDispatch } from '@/redux/store/reduxHooks'
import { getAuthUser } from '@/redux/slices/userSlice'
import { Phone, Menu } from 'iconoir-react'

export const Navbar = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const getUser = async () => {
      await dispatch(getAuthUser())
    }
    getUser()
  }, [dispatch])

  return (
    <nav className="fixed top-0 w-screen min-w-[280px] h-[3rem] md:h-[4rem] flex flex-row justify-between items-center bg-primaryPink text-secondaryWhite z-50">
      <Menu
        className="fill-floralWhite ml-4 md:mx-8 lg:hidden"
        height={25}
        width={25}
      />

      <div className="relative min-w-[10rem] min-h-[2.5rem] md:min-w-[14rem] md:min-h-[3rem] lg:ml-6 ">
        <Link href="/">
          <Image
            src="/curry_club_white_sm.png"
            fill
            style={{ objectFit: 'contain' }}
            alt="Indian Platter"
            sizes="(max-width: 600px) 200px, 300px"
          />
        </Link>
      </div>

      <div className="flex items-end mr-4 md:mx-8 gap-2">
        <div className="relative hidden lg:block ">
          <NavItems />
        </div>
        <Phone
          className="fill-floralWhite block lg:hidden"
          height={25}
          width={25}
        />
      </div>
    </nav>
  )
}
