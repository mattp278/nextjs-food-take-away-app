export interface ApiOptions {
  httpMethod: string
  route: string
  body?: any
}

export interface ApiErrorMsg {
  msg: string
}

export interface ApiErrorResponse {
  errors: Error[]
}

export interface MenuItem {
  id: string
  category: string
  image: string
  name: string
  price: number
}

export interface MenuItems {
  menuItems: MenuItem[]
}
