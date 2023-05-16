import { prisma } from '../../../../../../prisma/db/client'
import { NextApiRequest, NextApiResponse } from 'next'
import authMiddleware from '@/pages/api/auth/auth-middleware'

// export default authMiddleware(handler)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { method } = req
    if (method === 'GET') await getOrder(req, res)
  } catch (err: any) {
    console.error(err.message)
    res
      .status(500)
      .send({ success: false, status: 500, errors: [{ msg: 'Server Error' }] })
  }
}

//----------------------------------------------------------------------------------
const getOrder = async (req: NextApiRequest, res: NextApiResponse) => {
  const orderId = req.query.singleOrder?.[0]

  if (!orderId) {
    return res.status(400).json({
      success: false,
      status: 400,
      errors: [{ msg: 'No order id provided' }],
    })
  }

  const order = await prisma.order.findUnique({
    where: {
      id: orderId,
    },
  })

  return res.status(200).json({
    success: true,
    status: 200,
    msg: `1 order returned from database`,
    data: order,
  })
}
