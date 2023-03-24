import Image from 'next/image'

export const HomePage = () => {
  return (
    <section className="w-screen h-screen bg-lime-100">
      <div className="absolute w-1/2 flex flex-col items-center justify-center h-full bg-[#B4260B]">
        iFood
      </div>
      <div className="absolute w-3/5 right-0 flex flex-col items-center justify-center h-full bg-[#B4260B]">
        <div className="w-full h-full bg-red-300 clip-path-homepage">
          <Image
            src="/indian-platter.jpg"
            fill
            style={{ objectFit: 'cover' }}
            alt="Lady in canoe on a lake"
          />
        </div>
      </div>
    </section>
  )
}
