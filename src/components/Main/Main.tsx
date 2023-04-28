import Image from 'next/image'
import { ReactNode } from 'react'

interface HomePageProps {
  children: ReactNode
}

export const Main = ({ children }: HomePageProps) => {
  return (
    <main className="relative w-screen min-w-[280px] top-[3rem] md:top-[4rem]">
      <div className="absolute w-full h-full -z-10 bg-bgBlack ">
        <Image
          src="/curry_platter_bg.jpg"
          fill
          style={{ objectFit: 'cover', opacity: '0.4' }}
          alt="Indian Platter"
          quality={30}
        />
      </div>
      <section className="relative flex w-full min-h-screen flex-col items-center justify-start py-6 md:py-8">
        {children}
      </section>
    </main>
  )
}
