import { BiRestaurant } from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai'
import { MdOutlineReceiptLong } from 'react-icons/md'
import { BsFillCartFill } from 'react-icons/bs'
import { IconType } from 'react-icons'
import { ReactNode } from 'react'

interface NavItem {
  id: number
  name: string
  icon: IconType
  link: string
}

export const navItemsList: NavItem[] = [
  {
    id: 1,
    name: 'Menu',
    icon: BiRestaurant,
    link: '/pages/food-menu/food-menu',
  },
  {
    id: 2,
    name: 'Home',
    icon: AiFillHome,
    link: '/',
  },
  {
    id: 3,
    name: 'Orders',
    icon: MdOutlineReceiptLong,
    link: '/pages/orders/orders',
  },
  {
    id: 4,
    name: 'Card',
    icon: BsFillCartFill,
    link: '/pages/cart/cart',
  },
]
