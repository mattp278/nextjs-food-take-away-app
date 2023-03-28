import Image from 'next/image'
import { TfiMenu } from 'react-icons/tfi'
import { IconContext } from 'react-icons'

export const Navbar = () => {
  return (
    <IconContext.Provider
      value={{
        size: '3rem',
        className: 'fill-tertiaryGold',
      }}
    >
      <nav className="fixed top-0 w-screen h-[3rem] text-lg flex flex-row items-center justify-between p-4 bg-primaryRed text-whiteFloral z-10">
        <TfiMenu size="2em" />
        <div className="relative w-[12rem] h-[3rem] flex items-center justify-center">
          <Image
            src="/curry_club_gold.png"
            fill
            style={{ objectFit: 'contain' }}
            alt="Indian Platter"
          />
        </div>
      </nav>
    </IconContext.Provider>
  )
}
