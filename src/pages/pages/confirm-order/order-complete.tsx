import { Main, Navbar, OrderComplete } from '@/components'

export default function OrderCompletePage() {
  return (
    <>
      <title>Curry Club</title>
      <Navbar />
      <Main bgColorProp="sm:bg-quaternaryGrey">
        <OrderComplete />
      </Main>
    </>
  )
}
