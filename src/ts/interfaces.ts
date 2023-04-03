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

export interface FoodMenuItemInterface {
  id: string
  category: string
  image: string
  name: string
  price: number
}

export interface FoodMenuItemsInterface {
  menuItems: FoodMenuItemInterface[]
}

export interface FoodByCategoryInterface {
  category: string
  foodItems: FoodMenuItemInterface[]
}
