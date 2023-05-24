const sgMail = require('@sendgrid/mail')
import { prisma } from '../../../../../../prisma/db/client'
import { NextApiRequest, NextApiResponse } from 'next'
import authMiddleware from '@/pages/api/auth/auth-middleware'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../../auth/[...nextauth]'
import { htmlString } from './htmlString'

export default authMiddleware(handler)

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method } = req
    if (method === 'POST') {
      await sendConfirmEmail(req, res)
    }
  } catch (err: any) {
    console.error(err.message)
    res
      .status(500)
      .send({ success: false, status: 500, errors: [{ msg: 'Server Error' }] })
  }
}

//----------------------------------------------------------------------------------

const sendConfirmEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions)
  const orderId = req.query.orderId?.[0]
  const email = session?.user?.email

  if (!orderId) {
    return res.status(400).json({
      success: false,
      status: 400,
      errors: [{ msg: 'No order id provided' }],
    })
  }

  if (!email) {
    return res.status(401).send({
      success: false,
      status: 401,
      errors: [{ msg: 'Unable to fetch email' }],
    })
  }

  const orderItems = await prisma.orderItem.findMany({
    where: {
      orderId,
    },
    select: {
      quantity: true,
      food: true,
    },
  })

  const msg = {
    to: `${email}`,
    from: 'curryclublondon1234@gmail.com', // verified sendgrid email
    subject: `Curry Club London Order Confirmation`,
    text: `Order Number ${orderId} is confirmed`,
    html: htmlString({ orderId, orderItems }),
  }

  await sgMail.setApiKey(process.env.SEND_GRID_API_KEY)
  await sgMail.send(msg)

  return res.status(200).json({
    success: true,
    status: 200,
    msg: `A email confirmation has been sent to ${email}`,
    data: orderItems,
  })
}
