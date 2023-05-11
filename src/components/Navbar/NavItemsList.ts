import { Clutery, LogIn, LogOut, List, Cart, Phone } from 'iconoir-react'

interface NavItem {
  id: number
  name: string
  icon: any
  link: string
  telephoneHref?: string
  sessionReq: boolean
}

export const navItemsList: NavItem[] = [
  {
    id: 1,
    name: 'Menu',
    icon: Clutery,
    link: '/pages/food-menu/food-menu',
    sessionReq: false,
  },
  {
    id: 2,
    name: 'Orders',
    icon: List,
    link: '/pages/orders/orders',
    sessionReq: true,
  },
  {
    id: 3,
    name: 'Cart',
    icon: Cart,
    link: '/pages/confirm-order/confirm-order',
    sessionReq: true,
  },
  {
    id: 4,
    name: 'Sign Out',
    icon: LogOut,
    link: '/api/auth/signout',
    sessionReq: true,
  },
  {
    id: 4,
    name: 'Login',
    icon: LogIn,
    link: '/pages/auth/signin',
    sessionReq: false,
  },
  {
    id: 5,
    name: '020 8888 8888',
    icon: Phone,
    link: '',
    telephoneHref: 'tel:02088888888',
    sessionReq: false,
  },
]
