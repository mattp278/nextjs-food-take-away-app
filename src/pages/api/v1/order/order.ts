import { prisma } from '../../../../../prisma/db/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req
  try {
    switch (method) {
      case 'POST':
        await createOrder(req, res)
        break
      case 'GET':
        await getUserOrders(req, res)
        break
      case 'PUT':
        await addOrderItem(req, res)
        break
      case 'DELETE':
        await deleteOrder(req, res)
        break
    }
  } catch (err: any) {
    console.error(err.message)
    res
      .status(500)
      .send({ success: false, status: 500, errors: [{ msg: 'Server Error' }] })
  }
}

//----------------------------------------------------------------------------------

const createOrder = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId } = req.body

  const newOrder = await prisma.order.create({
    data: {
      userId,
    },
  })

  return res.status(201).json({
    success: true,
    status: 201,
    msg: 'New order item added to database',
    data: newOrder,
  })
}

//----------------------------------------------------------------------------------

const getUserOrders = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId } = req.body

  const userOrders = await prisma.order.findMany({
    where: {
      userId,
    },
    include: {
      orderItems: {
        include: {
          food: true,
        },
      },
    },
  })
  const numberOfUserOrders = userOrders.length

  if (userOrders.length === 0)
    return res.status(404).json({
      success: false,
      status: 404,
      errors: [{ msg: 'No orders found for this user' }],
    })

  return res.status(200).json({
    success: true,
    status: 200,
    msg: `There are ${numberOfUserOrders} user orders in the database`,
    data: userOrders,
  })
}

//----------------------------------------------------------------------------------

const checkIfFoodItemExists = async (orderId: string, foodId: string) => {
  const orderItem = await prisma.orderItem.findUnique({
    where: {
      food_item_unique: {
        orderId,
        foodId,
      },
    },
  })

  if (orderItem) return true
  if (!orderItem) return false
}

const updateOrderItemQuantity = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { orderId, foodId } = req.body
  const quantityToAdd = parseInt(req.body.quantity)

  const orderItem = await prisma.orderItem.findUnique({
    where: {
      food_item_unique: {
        orderId,
        foodId,
      },
    },
  })

  if (orderItem) {
    const updatedOrderItem = await prisma.orderItem.update({
      where: {
        id: orderItem.id,
      },
      data: {
        quantity: orderItem.quantity + quantityToAdd,
      },
    })

    return res.status(200).json({
      success: true,
      status: 200,
      msg: 'Order item quantity updated',
      data: updatedOrderItem,
    })
  }
}

const addOrderItem = async (req: NextApiRequest, res: NextApiResponse) => {
  const { orderId, foodId } = req.body
  const quantity = parseInt(req.body.quantity)

  const foodItemExists = await checkIfFoodItemExists(orderId, foodId)

  if (foodItemExists) {
    return await updateOrderItemQuantity(req, res)
  }

  const orderItemToAdd = await prisma.orderItem.create({
    data: {
      orderId,
      foodId,
      quantity,
    },
  })

  if (!orderItemToAdd) {
    return res.status(404).json({
      success: false,
      status: 404,
      errors: [{ msg: 'Server Error. Unable to add order item' }],
    })
  }

  const foodItemAdded = await prisma.foodItem.findUnique({
    where: {
      id: orderItemToAdd.foodId,
    },
  })

  if (!foodItemAdded) {
    return res.status(404).json({
      success: false,
      status: 404,
      errors: [{ msg: 'Server Error. Unable find added food item.' }],
    })
  }

  return res.status(201).json({
    success: true,
    status: 201,
    msg: 'New order item added to database',
    data: {
      orderItemToAdd,
      foodItemAdded,
    },
  })
}

//----------------------------------------------------------------------------------
const deleteOrder = async (req: NextApiRequest, res: NextApiResponse) => {
  const { orderId } = req.body

  const orderToDelete = await prisma.order.findUnique({
    where: {
      id: orderId,
    },
  })

  if (!orderToDelete) {
    return res.status(404).json({
      success: false,
      status: 404,
      errors: [{ msg: 'Order not found' }],
    })
  }

  await prisma.order.delete({
    where: {
      id: orderId,
    },
  })

  return res.status(200).json({
    success: true,
    status: 200,
    msg: 'Order deleted from database',
    data: orderToDelete,
  })
}
