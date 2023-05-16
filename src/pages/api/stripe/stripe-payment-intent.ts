import { NextApiResponse, NextApiRequest } from 'next'
import Stripe from 'stripe'

// This is your test secret API key.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
  apiVersion: '2022-11-15',
})

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client

  return 1400
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { amount } = req.body
  console.log('amount handler', amount)
  console.log('calculateOrderAmount(amount),', calculateOrderAmount(amount))

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(amount),
    currency: 'eur',
    automatic_payment_methods: {
      enabled: true,
    },
  })

  res.send({
    clientSecret: paymentIntent.client_secret,
  })
}
