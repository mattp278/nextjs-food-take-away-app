import { Main, Navbar, ConfirmOrder } from '@/components'
import withAuth from '../../withAuth'

function ConfrimOrderPage() {
  return (
    <>
      <title>Curry Club</title>
      <Navbar />
      <Main>
        <ConfirmOrder />
      </Main>
    </>
  )
}

export default withAuth(ConfrimOrderPage)
