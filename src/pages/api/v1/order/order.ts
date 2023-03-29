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
        //await getOrders(req, res)
        break
      case 'PUT':
        //await updateOrder(req, res)
        break
      case 'DELETE':
        //await deleteOrder(req, res)
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
  console.log('userId', userId)

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
