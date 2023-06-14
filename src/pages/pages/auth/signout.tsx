import { Button, Navbar } from '@/components'
import { useAppDispatch } from '@/redux/store/reduxHooks'
import { resetAllState } from '@/redux/store/store'
import { signOut, useSession } from 'next-auth/react'
import { SlLogout } from 'react-icons/sl'

export default function SignOut({}) {
  const dispatch = useAppDispatch()
  const { data: session } = useSession()
  console.log('session', session)

  const onSignOutClick = async () => {
    await signOut({ callbackUrl: '/' })
    dispatch(resetAllState())
  }

  return (
    <>
      <Navbar />
      <section className="flex justify-center min-h-screen bg-quaternaryGrey md:bg-quaternaryGrey/25">
        <article className="sm:w-screen md:w-[400px] max-w-[400px] h-[20rem] flex flex-col items-center justify-center rounded-3xl md:bg-quaternaryGrey md:shadow-lg md:m-8 p-8">
          <SlLogout className="text-primaryPink" height={125} width={125} />
          <h1 className="text-3xl pb-5">SIGN OUT</h1>
          <div className="w-full md:w-11/12 text-lg flex flex-col items-center">
            <Button
              type="button"
              onClick={onSignOutClick}
              text={'Sign Out'}
              optionalClassNames="w-full rounded-lg m-2"
            />
          </div>
        </article>
      </section>
    </>
  )
}
