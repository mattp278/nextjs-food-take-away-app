import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NavItems } from './NavItems'
import { useAppDispatch, useAppSelector } from '@/redux/store/reduxHooks'
import { getAuthUser } from '@/redux/slices/userSlice'
import { resetOrdersState } from '@/redux/slices/ordersSlice'
import { resetCartState } from '@/redux/slices/cartSlice'

export const Navbar = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const getUser = async () => {
      await dispatch(getAuthUser())
      dispatch(resetOrdersState())
    }
    getUser()
  }, [dispatch])

  return (
    <nav className="fixed top-0 w-screen min-w-[280px] h-[5rem] text-lg flex flex-col md:flex-row items-center justify-center bg-primaryRed text-whiteFloral z-50">
      <Link href="/">
        <div className="relative w-[14rem] md:w-[16rem] min-h-[2.2rem] md:min-h-[5rem] md:left-6">
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
  )
}
