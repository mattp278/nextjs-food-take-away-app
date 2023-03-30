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

export interface FoodMenuItem {
  id: string
  category: string
  image: string
  name: string
  price: number
}

export interface FoodMenuItems {
  menuItems: FoodMenuItem[]
}
