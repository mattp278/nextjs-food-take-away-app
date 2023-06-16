import { Main, Navbar } from '@/components'
import { useSession } from 'next-auth/react'
import { VscBracketError } from 'react-icons/vsc'

export default function Error({}) {
  const { data: session } = useSession()
  console.log('session', session)

  return (
    <>
      <Navbar />
      <Main>
        <section className=" relative sm:w-11/12 md:w-[400px] max-w-[400px] flex flex-col items-center justify-center rounded-3xl p-6 md:p-8 bg-secondaryWhite">
          <VscBracketError className="text-primaryPink" height={125} width={125} />
          <h1 className="text-3xl py-5">UNKNOWN ERROR</h1>
          <p className="text-center">
            Please use the back button on your browser and try again
          </p>
        </section>
      </Main>
    </>
  )
}
