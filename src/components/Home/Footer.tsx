import Image from 'next/image'
import { LinkButton } from '@/components'
import { Facebook, Twitter, Instagram } from 'iconoir-react'

export const Footer = () => {
  return (
    <footer className="relative w-screen min-w-[280px] bg-primaryPink pb-10 ">
      <div className="flex flex-col md:flex-row gap-8 text-xl text-secondaryWhite">
        <div className="grow min-w-[320px] text-center md:text-left md:pl-8 pt-4">
          <p className="font-bold text-2xl md:pb-4 pb-2">Links</p>
          <div className="flex flex-row items-center justify-center md:justify-start gap-4">
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>

        <div className="grow text-center md:text-right md:pr-10 md:pt-4">
          <p className="font-bold text-2xl md:pb-4">Contact Us</p>
          <p>1 London Walk</p>
          <p>London</p>
          <p>SW1 1AA</p>
          <p>0208 888 8888</p>
          <a
            className="text-2xl underline underline-offset-2"
            href="mailto:info@curryclub.com"
          >
            info@curryclub.com
          </a>
        </div>
      </div>
    </footer>
  )
}
