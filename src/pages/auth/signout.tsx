import { signOut } from 'next-auth/react'
import { Main, Navbar, Button } from '@/components'
import { LogOut } from 'iconoir-react'

export default function SignIn({}) {
  return (
    <>
      <Navbar />
      <Main>
        <section className=" relative sm:w-11/12 md:w-[400px] max-w-[400px] flex flex-col items-center justify-center rounded-3xl p-6 md:p-8 bg-tertiaryGold">
          <LogOut className="text-primaryRed" height={125} width={125} />
          <h1 className="text-3xl pb-5">SIGN OUT</h1>
          <div className="">
            <Button
              type="button"
              onClick={() => signOut()}
              text={'Sign Out'}
              optionalClassNames="w-[200px] min-w-[150px] rounded-lg m-2"
            />
          </div>
        </section>
      </Main>
    </>
  )
}
