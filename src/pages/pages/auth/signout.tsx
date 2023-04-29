import { signOut } from 'next-auth/react'
import { Main, Navbar, Button } from '@/components'
import { LogOut } from 'iconoir-react'
import { useAppDispatch } from '@/redux/store/reduxHooks'
import { resetAllState } from '@/redux/store/store'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

export default function SignOut({}) {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { data: session } = useSession()
  console.log('session', session)

  const onSignOutClick = async () => {
    signOut()
    dispatch(resetAllState())
    router.replace('/')
  }

  return (
    <>
      <Navbar />
      <Main>
        <section className=" relative sm:w-11/12 md:w-[400px] max-w-[400px] flex flex-col items-center justify-center rounded-3xl p-6 md:p-8 bg-tertiaryGold">
          <LogOut className="text-primaryPink" height={125} width={125} />
          <h1 className="text-3xl pb-5">SIGN OUT</h1>
          <div className="">
            <Button
              type="button"
              onClick={onSignOutClick}
              text={'Sign Out'}
              optionalClassNames="w-[200px] min-w-[150px] rounded-lg m-2"
            />
          </div>
        </section>
      </Main>
    </>
  )
}
