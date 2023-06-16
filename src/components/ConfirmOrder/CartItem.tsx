import { removeCartItem } from '@/redux/slices/cartSlice'
import { useAppDispatch } from '@/redux/store/reduxHooks'
import { TSFoodMenuItem } from '@/ts/interfaces'
import Image from 'next/image'
import { CiSquareRemove } from "react-icons/ci"

export const CartItem = ({
  id,
  image,
  name,
  category,
  price,
  quantity,
  itemTotal,
}: TSFoodMenuItem) => {
  const dispatch = useAppDispatch()
  const onRemoveItem = () => {
    dispatch(removeCartItem({ id, price }))
  }
  return (
    <article className="w-full text-base">
      <div className="my-1 flex flex-row items-center justify-between bg-primaryPink">
        <div className="relative min-h-[3rem] w-3/12 min-w-[3rem] ">
          <Image
            src={`/foodImages/${image}`}
            fill
            style={{ objectFit: 'cover' }}
            alt={name}
            quality={30}
            sizes="(max-width: 600px) 50px, 100px"
          />
        </div>

        <p className="m-1 w-4/12 break-words pl-2 text-white">{name}</p>
        <p className="m-1 w-2/12 text-center text-white">{quantity}</p>
        <p className="m-1 w-2/12 text-white">{itemTotal?.toFixed(2)}</p>
        <p className="m-1 w-1/12 text-white">
          <CiSquareRemove onClick={onRemoveItem} />
        </p>
      </div>
    </article>
  )
}
