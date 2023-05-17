import { Navbar, ConfirmOrder } from '@/components'
import withAuth from '../../withAuth'

function ConfrimOrderPage() {
  return (
    <>
      <title>Curry Club</title>
      <Navbar />
      <div className="flex justify-center min-h-screen bg-quaternaryGrey md:bg-quaternaryGrey/25">
        <ConfirmOrder />
      </div>
    </>
  )
}

export default withAuth(ConfrimOrderPage)
