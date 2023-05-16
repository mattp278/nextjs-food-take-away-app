import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '../../../components/stripe/CheckoutForm'
import { Main, Navbar } from '@/components'
import { useAppSelector } from '@/redux/store/reduxHooks'

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
//@ts-ignore
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function Payment() {
  const [clientSecret, setClientSecret] = useState('')
  const { order } = useAppSelector((state) => state.cart)
  console.log('order', order)

  React.useEffect(() => {
    fetch('/api/stripe/stripe-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: order }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [])

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
          <Main bgColorProp="sm:bg-quaternaryGrey md:bg-secondaryWhite">
            <CheckoutForm />
          </Main>
        </Elements>
      )}
    </section>
  )
}
