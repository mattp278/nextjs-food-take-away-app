import { galleryItems } from './galleryItems'
import { GalleryItem } from './GalleryItem'
import { LinkButton } from '@/components'

export const Gallery = () => {
  const galleryItemElements = galleryItems.map((item) => {
    const { id, image, alt, title, text } = item
    return (
      <GalleryItem key={id} image={image} alt={alt} title={title} text={text} />
    )
  })

  return (
    <section className="relative w-screen min-w-[280px] min-h-[400px] bg-tertiaryBlack ">
      <div className="w-screen flex flex-row items-center justify-around flex-wrap gap-20 pt-20 pb-5 px-8">
        {galleryItemElements}
      </div>
      <div className="w-screen flex items-center justify-center pb-20">
        <LinkButton
          href="/pages/food-menu/food-menu"
          text="Order Now"
          type="button"
          optionalClassNames="text-xl rounded-lg px-8 p-3"
        />
      </div>
    </section>
  )
}
