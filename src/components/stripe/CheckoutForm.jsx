import { Button } from '@/components'
import { useAppSelector } from '@/redux/store/reduxHooks'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React from 'react'
import { ImCreditCard } from 'react-icons/im'

export default function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()
  const totalPrice = useAppSelector((state) => state.cart.totalPrice)

  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    if (!stripe) {
      return
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    )

    if (!clientSecret) {
      return
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!')
          break
        case 'processing':
          setMessage('Your payment is processing.')
          break
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.')
          break
        default:
          setMessage('Something went wrong.')
          break
      }
    })
  }, [stripe])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsLoading(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        receipt_email: email,
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pages/confirm-order/order-complete`,
      },
    })

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message)
    } else {
      setMessage('An unexpected error occurred.')
    }

    setIsLoading(false)
  }

  const paymentElementOptions = {
    layout: 'tabs',
  }

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="flex h-[42rem] flex-col items-center rounded-3xl p-8 md:m-8 md:my-8 md:h-[40rem] md:bg-quaternaryGrey md:shadow-lg"
    >
      <ImCreditCard
        className="min-h-[4rem] text-primaryPink"
        height={125}
        width={125}
      />
      <h1 className="pb-5 text-center text-3xl">PAYMENT</h1>

      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <Button
        disabled={isLoading || !stripe || !elements}
        id="submit"
        type="submit"
        optionalClassNames="text-lg w-full m-6"
        text={`PAY NOW £${totalPrice.toFixed(2)}`}
      >
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : `Pay now`}
        </span>
      </Button>
      {message ? (
        <div id="payment-message" className="text-red-500">
          {message}
        </div>
      ) : null}
    </form>
  )
}
