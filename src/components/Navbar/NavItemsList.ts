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
  onClick: () => void
}

export const navItemsList: NavItem[] = [
  {
    id: 1,
    name: 'Menu',
    icon: BiRestaurant,
    onClick: () => console.log('Home'),
  },
  {
    id: 2,
    name: 'Home',
    icon: AiFillHome,
    onClick: () => console.log('Home'),
  },
  {
    id: 3,
    name: 'Orders',
    icon: MdOutlineReceiptLong,
    onClick: () => console.log('Home'),
  },
  {
    id: 4,
    name: 'Card',
    icon: BsFillCartFill,
    onClick: () => console.log('Home'),
  },
]
