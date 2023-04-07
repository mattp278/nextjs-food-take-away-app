import Image from 'next/image'
import Link from 'next/link'
import { BiRestaurant } from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai'
import { MdOutlineReceiptLong } from 'react-icons/md'
import { BsFillCartFill } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import { NavItems } from './NavItems'

export const Navbar = () => {
  return (
    <IconContext.Provider
      value={{
        size: '2rem',
        className: 'fill-tertiaryGold',
      }}
    >
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
    </IconContext.Provider>
  )
}
