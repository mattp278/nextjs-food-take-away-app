import { Main, Navbar, ConfirmOrder } from '@/components'
import withAuth from '../../withAuth'

function ConfrimOrderPage() {
  return (
    <>
      <title>Curry Club</title>
      <Navbar />
      <Main bgColorProp="sm:bg-quaternaryGrey md:bg-secondaryWhite">
        <ConfirmOrder />
      </Main>
    </>
  )
}

export default withAuth(ConfrimOrderPage)
