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
        //await updateOrder(req, res)
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

  res.status(201).json({
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
  })
  const numberOfUserOrders = userOrders.length

  if (userOrders.length === 0)
    return res.status(404).json({
      success: false,
      status: 404,
      errors: [{ msg: 'No orders found for this user' }],
    })

  res.status(200).json({
    success: true,
    status: 200,
    msg: `There are ${numberOfUserOrders} user orders in the database`,
    data: userOrders,
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

  res.status(200).json({
    success: true,
    status: 200,
    msg: 'Order deleted from database',
    data: orderToDelete,
  })
}
