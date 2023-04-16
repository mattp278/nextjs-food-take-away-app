import { useEffect } from 'react'
import { Main, Hero, Navbar } from '@/components'
import { useAppDispatch } from '@/redux/store/reduxHooks'
import { resetAllState } from '@/redux/store/store'

export default function LogoutPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(resetAllState())
  }, [dispatch])

  return (
    <>
      <title>Curry Club</title>
      <Navbar />

      <Hero />
    </>
  )
}
