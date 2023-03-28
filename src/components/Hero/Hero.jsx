import Image from 'next/image'

export const Hero = () => {
  return (
    <main className="relative w-screen h-[100px] min-h-screen min-w-[280px]">
      <div className="absolute w-full h-full z-0 ">
        <Image
          src="/curry_platter_bg.jpg"
          fill
          style={{ objectFit: 'cover' }}
          alt="Indian Platter"
        />
      </div>
      <section className="relative flex min-h-screen flex-col items-center justify-center">
        <article className="relative flex justify-center h-1/6 w-5/6 md:w-4/6 lg:w-1/2 min-w-[280px] min-h-[100px] md:min-h-[150px] rounded-xl bg-primaryRed p-12">
          <Image
            src="/curry_club_gold.png"
            fill
            style={{ objectFit: 'contain' }}
            alt="Curry Club Logo"
          />
        </article>
      </section>
    </main>
  )
}
