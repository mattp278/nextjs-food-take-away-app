import Image from 'next/image'
import { galleryItems } from './galleryItems'
import { GalleryItem } from './GalleryItem'

export const Gallery = () => {
  const galleryItemElements = galleryItems.map((item) => {
    const { id, image, alt, title, text } = item
    return (
      <GalleryItem key={id} image={image} alt={alt} title={title} text={text} />
    )
  })

  return (
    <section className="relative w-screen min-w-[280px] min-h-[400px]">
      <div className="w-screen flex flex-row items-center justify-center flex-wrap gap-10 bg-tertiaryBlack py-20 px-4">
        {galleryItemElements}
      </div>
    </section>
  )
}
;``
