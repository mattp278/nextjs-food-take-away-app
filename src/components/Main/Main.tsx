import Image from 'next/image'
import { ReactNode } from 'react'

interface HomePageProps {
  children: ReactNode
  bgColorProp?: string
}

export const Main = ({ children, bgColorProp }: HomePageProps) => {
  const backgroundColour = bgColorProp ? bgColorProp : 'none'
  return (
    <main className="relative w-screen min-w-[280px] top-[3rem] md:top-[4rem] bg-secondaryWhite">
      <div className={`absolute w-full h-full ${backgroundColour}`}></div>
      <section className="relative flex w-full min-h-screen flex-col items-center justify-star">
        {children}
      </section>
    </main>
  )
}
