import { FoodMenuItemInterface } from '@/ts/interfaces'
import Image from 'next/image'
import { Button } from '@/components'
import { addCartItem } from '@/redux/slices/cartSlice'
import { useAppDispatch } from '@/redux/store/reduxHooks'

export const FoodMenuItem = ({
  id,
  image,
  name,
  category,
  price,
}: FoodMenuItemInterface) => {
  const dispatch = useAppDispatch()

  const priceWithDecimal = price.toFixed(2)

  const handleAddtoCart = () => {
    dispatch(addCartItem({ id, name, category, price, image }))
  }

  return (
    <article className="w-5/6 min-w-[250px] max-w-[20rem] m-4">
      <div className="relative h-[10rem]">
        <Image
          src={`/foodImages/${image}`}
          fill
          style={{ objectFit: 'cover' }}
          alt={name}
          quality={30}
        />
      </div>
      <div className="flex items-center justify-between bg-tertiaryGold">
        <p className=" text-white p-3">{name}</p>
        <p className="bg-tertiaryGold text-white p-3">{priceWithDecimal}</p>
        <Button
          text="Add To Cart"
          type="button"
          optionalClassNames=""
          onClick={handleAddtoCart}
        />
      </div>
    </article>
  )
}
