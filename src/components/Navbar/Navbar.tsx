import Image from 'next/image'
import Link from 'next/link'
import { BiRestaurant } from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai'
import { MdOutlineReceiptLong } from 'react-icons/md'
import { IconContext } from 'react-icons'

export const Navbar = () => {
  return (
    <IconContext.Provider
      value={{
        size: '2rem',
        className: 'fill-tertiaryGold',
      }}
    >
      <nav className="fixed top-0 w-screen min-w-[280px] h-[5rem] text-lg flex flex-col md:flex-row items-center justify-center bg-primaryRed text-whiteFloral z-10">
        <Link href="/">
          <div className="relative w-[14rem] md:w-[16rem] min-h-[2.2rem] md:min-h-[6rem] md:left-6">
            <Image
              src="/curry_club_gold_sm.png"
              fill
              style={{ objectFit: 'contain' }}
              alt="Indian Platter"
            />
          </div>
        </Link>
        <div className="w-5/6 flex flex-row justify-between md:justify-end md:pr-6 gap-4">
          <BiRestaurant />
          <AiFillHome />
          <MdOutlineReceiptLong />
        </div>
      </nav>
    </IconContext.Provider>
  )
}
