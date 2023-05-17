import { Navbar, OrderComplete } from '@/components'

export default function OrderCompletePage() {
  return (
    <>
      <title>Curry Club</title>
      <Navbar />
      <section className="flex min-h-screen justify-center items-start bg-quaternaryGrey md:bg-quaternaryGrey/25">
        <OrderComplete />
      </section>
    </>
  )
}
