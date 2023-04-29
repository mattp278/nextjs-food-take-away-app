import React from 'react'
import Image from 'next/image'

interface HomeImageItemIterface {
  image: string
  alt: string
  title: string
  text: string
}

export const GalleryItem = ({
  image,
  alt,
  title,
  text,
}: HomeImageItemIterface) => {
  return (
    <article className="w-[300px] ">
      <Image src={image} width={300} height={300} alt={alt} quality={80} />
      <h1 className="text-center font-bold text-3xl text-secondaryWhite p-2">
        {title}
      </h1>
      <p className="text-center text-lg text-secondaryWhite min-h-[100px]">
        {text}
      </p>
    </article>
  )
}
