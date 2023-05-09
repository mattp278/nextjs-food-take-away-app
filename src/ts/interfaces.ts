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
  itemTotal?: number
  createdAt?: string
  updatedAt?: string
}

export interface TSCartMenuItem {
  id: string
  category: string
  image: string
  name: string
  price: number
  quantity: number
  itemTotal: number
  createdAt?: string
  updatedAt?: string
}

export interface TSFoodMenuItems {
  menuItems: TSFoodMenuItem[]
}

export interface TSFoodByCategory {
  category: string
  foodItems: TSFoodMenuItem[]
}

export interface TSOrderItem {
  id: string
  quantity: number
  createdAt: string
  updatedAt: string
  orderId: string
  foodId: string
  food: TSFoodMenuItem
}

export interface TSOrder {
  id: string
  totalPrice: string
  createdAt: string
  updatedAt: string
  userId: string
  orderItems: TSOrderItem[]
}
