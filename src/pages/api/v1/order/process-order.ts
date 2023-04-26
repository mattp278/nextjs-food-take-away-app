import { prisma } from '../../../../../prisma/db/client'
import { NextApiRequest, NextApiResponse } from 'next'
import authMiddleware from '../../auth/auth-middleware'

interface FoodItemIdQuantity {
  id: string
  quantity: string
}

export default authMiddleware(handler)

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  try {
    switch (method) {
      case 'POST':
        await processOrder(req, res)
        break
      case 'GET':
        res.send('get route not live')
        break
      case 'PUT':
        res.send('put route not live')
        break
      case 'DELETE':
        res.send('delete route not live')
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

const processOrder = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, foodItems } = req.body

  if (!userId) {
    return res.status(400).json({
      success: false,
      status: 400,
      errors: [{ msg: 'User ID is required' }],
    })
  }

  if (!foodItems || foodItems.length === 0) {
    return res.status(400).json({
      success: false,
      status: 400,
      errors: [{ msg: 'Food items are required' }],
    })
  }

  const newOrder = await prisma.order.create({
    data: {
      userId,
    },
  })
  const newOrderId = newOrder.id

  if (!newOrder) {
    return res.status(500).json({
      success: false,
      status: 500,
      errors: [{ msg: 'Error creating new order' }],
    })
  }

  let foodItemIds: string[] = []
  foodItems.forEach((foodItem: FoodItemIdQuantity) => {
    const foodId = foodItem.id

    if (foodItemIds.includes(foodId)) {
      return res.status(400).json({
        success: false,
        status: 400,
        errors: [
          {
            msg: 'Mutiple copies of a food item supplied. Please supply a single copy of each food item with the correct quantity',
          },
        ],
      })
    }

    foodItemIds.push(foodId)
  })

  const orderItems = await prisma.orderItem.createMany({
    data: foodItems.map((foodItem: FoodItemIdQuantity) => ({
      orderId: newOrderId,
      foodId: foodItem.id,
      quantity: parseInt(foodItem.quantity),
    })),
  })

  const completedOrder = await prisma.orderItem.findMany({
    where: {
      orderId: newOrderId,
    },
    select: {
      food: true,
    },
  })

  return res.status(201).json({
    success: true,
    status: 201,
    msg: 'New order item added to database',
    data: {
      completedOrder,
      orderId: newOrderId,
    },
  })
}

//----------------------------------------------------------------------------------
