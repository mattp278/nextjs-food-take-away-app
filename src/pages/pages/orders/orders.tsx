import { Orders, Main, Navbar } from '@/components'
import withAuth from '@/pages/withAuth'

function OrdersPage() {
  return (
    <>
      <Navbar />
      <Main>
        <Orders />
      </Main>
    </>
  )
}

export default withAuth(OrdersPage)
