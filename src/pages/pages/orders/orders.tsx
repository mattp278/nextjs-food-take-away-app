import { Orders, Navbar } from '@/components'
import withAuth from '@/pages/withAuth'

function OrdersPage() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-start justify-center bg-quaternaryGrey md:bg-quaternaryGrey/25">
        <Orders />
      </div>
    </>
  )
}

export default withAuth(OrdersPage)
