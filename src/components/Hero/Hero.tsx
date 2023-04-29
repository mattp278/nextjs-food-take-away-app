import Image from 'next/image'
import { LinkButton } from '@/components'

export const Hero = () => {
  return (
    <section className="relative w-screen min-w-[280px]">
      <div className="absolute w-screen h-full z-0 ">
        <Image
          src="/curry_rice_bg.jpg"
          fill
          style={{ objectFit: 'cover' }}
          alt="Curry and Rice on a table"
          quality={80}
        />
      </div>
      <section className="relative min-h-[550px] md:min-h[650px] lg:min-h-[800px] h-screen lg:w-1/2 flex flex-col items-center lg:items-start justify-center lg:ml-10">
        <div className="w-5/6 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-black text-secondaryWhite mb-3 md:mb-5 ">
            London&apos;s Luxurious Curry Club
          </h1>
          <p className="text-lg md:text-xl leading-tight md:leading-normal text-justify text-secondaryWhite">
            Indulge in authentic, exquisite flavours at our luxurious Curry Club
            takeaway in London. Our expert chefs use only the freshest
            ingredients and traditional cooking methods to create a menu of
            classic and adventurous dishes that will transport you straight to
            India. Place your order now and experience the ultimate luxury
            takeaway.
          </p>
        </div>
        <LinkButton
          href="/pages/food-menu/food-menu"
          text="View Food Menu"
          type="button"
          optionalClassNames="text-xl rounded-lg p-4 mt-10"
        />
      </section>
    </section>
  )
}
