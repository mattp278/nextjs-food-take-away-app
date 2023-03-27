import Image from 'next/image'
import Link from 'next/link'
import { TfiMenu } from 'react-icons/tfi'

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-screen h-[3rem] text-lg flex flex-row items-center justify-between p-4 text-primaryRed bg-whiteFloral z-10">
      {/* <Link href="/signup/sign-up-page">SIGN UP</Link>
      <Link href="/signup/sign-up-page">FOOD MENU</Link> */}
      <TfiMenu size="2em" />
      <div className="relative w-[12rem] h-[3rem] flex items-center justify-center">
        <Image
          src="/curry_club_logo.png"
          fill
          style={{ objectFit: 'contain' }}
          alt="Indian Platter"
        />
      </div>
    </nav>
  )
}
