import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '../../../components/stripe/CheckoutForm'
import { Navbar } from '@/components'
import { useAppSelector } from '@/redux/store/reduxHooks'

//@ts-ignore
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function Payment() {
  const [clientSecret, setClientSecret] = useState('')
  const { pendingOrderId } = useAppSelector((state) => state.cart)

  React.useEffect(() => {
    fetch('/api/stripe/stripe-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderId: pendingOrderId }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [pendingOrderId])

  const appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#c52b67',
    },
  }
  const options = {
    clientSecret,
    appearance,
  }

  return (
    <section>
      {clientSecret && (
        //@ts-ignore
        <Elements options={options} stripe={stripePromise}>
          <Navbar />
          <section className="flex min-h-screen justify-center bg-quaternaryGrey md:bg-quaternaryGrey/25">
            <CheckoutForm />
          </section>
        </Elements>
      )}
    </section>
  )
}
