import { Clutery, LogOut, List, Cart } from 'iconoir-react'

interface NavItem {
  id: number
  name: string
  icon: any
  link: string
}

export const navItemsList: NavItem[] = [
  {
    id: 1,
    name: 'Menu',
    icon: Clutery,
    link: '/pages/food-menu/food-menu',
  },
  {
    id: 2,
    name: 'Orders',
    icon: List,
    link: '/pages/orders/orders',
  },
  {
    id: 3,
    name: 'Cart',
    icon: Cart,
    link: '/pages/confirm-order/confirm-order',
  },
  {
    id: 4,
    name: 'LogOut',
    icon: LogOut,
    link: '/',
  },
]
