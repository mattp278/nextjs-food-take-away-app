import Image from 'next/image'

export const Hero = () => {
  return (
    <main className="relative w-screen min-h-screen min-w-[280px]">
      <div className="absolute w-full h-full z-0 ">
        <Image
          src="/curry_platter_bg.jpg"
          fill
          style={{ objectFit: 'cover' }}
          alt="Indian Platter"
        />
      </div>
      <section className="relative flex w-full min-h-screen flex-col items-center justify-center py-6">
        <article className="relative flex w-full h-1/6 min-w-[280px] min-h-[130px] rounded-xl bg-whiteFloral">
          <div className="relative flex w-full h-1/6 min-w-[280px] min-h-[130px] rounded-xl p-20">
            <Image
              src="/curry_club_logo.png"
              fill
              style={{ objectFit: 'scale-down' }}
              alt="Curry Lcub Logo"
            />
          </div>
        </article>
      </section>
    </main>
  )
}
