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

export interface TSFoodMenuItem {
  id: string
  category: string
  image: string
  name: string
  price: number
  quantity?: number
}

export interface TSCartMenuItem {
  id: string
  category: string
  image: string
  name: string
  price: number
  quantity: number
}

export interface TSFoodMenuItems {
  menuItems: TSFoodMenuItem[]
}

export interface TSFoodByCategory {
  category: string
  foodItems: TSFoodMenuItem[]
}
