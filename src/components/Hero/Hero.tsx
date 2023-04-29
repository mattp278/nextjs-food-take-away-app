import Image from 'next/image'
import { LinkButton } from '@/components'

export const Hero = () => {
  return (
    <main className="relative w-screen h-screen max-h-[800px] min-w-[280px] top-[3rem] md:top-[4rem] ">
      <div className="absolute w-screen h-full z-0 ">
        <Image
          src="/curry_rice_bg.jpg"
          fill
          style={{ objectFit: 'cover' }}
          alt="Curry and Rice on a table"
          quality={80}
        />
      </div>
      <section className="relative h-full lg:w-1/2 flex flex-col items-start justify-center md:ml-10">
        <div className="w-5/6 m-10 text-center lg:text-left">
          <h1 className="text-xl md:text-4xl font-black text-secondaryWhite mb-5 ">
            London&apos;s Luxurious Curry Club
          </h1>
          <p className="text-xl text-secondaryWhite mb-5">
            Indulge in authentic, exquisite flavours at our luxurious Curry Club
            takeaway in London. Our expert chefs use only the freshest
            ingredients and traditional cooking methods to create a menu of
            classic and adventurous dishes that will transport you straight to
            India. Place your order now and experience the ultimate luxury
            takeaway.
          </p>
        </div>
        <div className="w-5/6 m-10 text-center lg:text-left">
          <LinkButton
            href="/pages/food-menu/food-menu"
            text="View Food Menu"
            type="button"
            optionalClassNames="text-xl rounded-lg p-4"
          />
        </div>
      </section>
    </main>
  )
}
