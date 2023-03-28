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
      <nav className="fixed top-0 w-screen h-[5rem] text-lg flex flex-col items-center justify-center px-4 bg-primaryRed text-whiteFloral z-10">
        <div className="relative w-[10rem] min-h-[2.2rem] flex items-center justify-center  ">
          <Image
            src="/curry_club_gold_sm.png"
            fill
            style={{ objectFit: 'contain' }}
            alt="Indian Platter"
          />
        </div>
        <TfiMenu size="1.2em" />
      </nav>
    </IconContext.Provider>
  )
}
