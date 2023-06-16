import { IconType } from "react-icons"
import { AiOutlineUnorderedList } from "react-icons/ai"
import { BsTelephone } from "react-icons/bs"
import { CiShoppingCart } from "react-icons/ci"
import { GiForkKnifeSpoon } from "react-icons/gi"
import { SlLogin, SlLogout } from "react-icons/sl"


interface NavItem {
  id: number
  name: string
  Icon: IconType
  link: string
  telephoneHref?: string
  sessionReq: boolean
}

export const navItemsList: NavItem[] = [
  {
    id: 1,
    name: 'Menu',
    Icon: GiForkKnifeSpoon,
    link: '/pages/food-menu/food-menu',
    sessionReq: false,
  },
  {
    id: 2,
    name: 'Orders',
    Icon: AiOutlineUnorderedList,
    link: '/pages/orders/orders',
    sessionReq: true,
  },
  {
    id: 3,
    name: 'Cart',
    Icon: CiShoppingCart,
    link: '/pages/confirm-order/confirm-order',
    sessionReq: true,
  },
  {
    id: 4,
    name: 'Sign Out',
    Icon: SlLogout,
    link: '/api/auth/signout',
    sessionReq: true,
  },
  {
    id: 4,
    name: 'Login',
    Icon: SlLogin,
    link: '/pages/auth/signin',
    sessionReq: false,
  },
  {
    id: 5,
    name: '020 8888 8888',
    Icon: BsTelephone,
    link: '',
    telephoneHref: 'tel:02088888888',
    sessionReq: false,
  },
]
