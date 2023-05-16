import { NextApiResponse, NextApiRequest } from 'next'
import Stripe from 'stripe'
import { apiCall } from '@/utils/apiUtil'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
  apiVersion: '2022-11-15',
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { orderId } = req.body

  const order = await apiCall({
    httpMethod: 'GET',
    route: `api/v1/order/single-order/${orderId}`,
  })

  const totalPrice = +order.data.totalPrice * 100

  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalPrice,
    currency: 'GBP',
    automatic_payment_methods: {
      enabled: true,
    },
  })

  res.send({
    clientSecret: paymentIntent.client_secret,
  })
}
