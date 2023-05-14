import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next'
import { Router } from 'next/router'
import { useRef } from 'react'
import { getProviders, signIn } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../api/auth/[...nextauth]'
import { Main, Navbar, Button } from '@/components'
// import { SmallShopAlt } from 'iconoir-react'

export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const emailRef = useRef<HTMLInputElement>(null)

  const handleEmailSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (emailRef.current) {
      await signIn('email', {
        email: emailRef.current.value,
        callbackUrl: '/pages/food-menu/food-menu',
      })
    }
  }

  const emailProvider = Object.values(providers).map((provider) => {
    if (provider.name === 'Email') {
      return (
        <div key={provider.name} className="w-full md:w-11/12 pb-4 text-lg">
          <form
            onSubmit={handleEmailSignIn}
            className="flex flex-col items-center"
          >
            <input
              type="email"
              ref={emailRef}
              placeholder="Email address"
              className="w-full p-2 rounded border"
            />
            <Button
              type="submit"
              optionalClassNames="w-full p-2 rounded-lg my-2"
              text={`Sign in with ${provider.name}`}
            ></Button>
          </form>
        </div>
      )
    }
  })

  const oAuthProviders = Object.values(providers).map((provider) => {
    if (provider.name === 'Email') {
      return
    }

    return (
      <div key={provider.name} className="w-full md:w-11/12 text-lg">
        <Button
          type="button"
          onClick={() => signIn(provider.id)}
          text={`Sign in with ${provider.name}`}
          optionalClassNames="w-full rounded-lg p-2 my-2"
        />
      </div>
    )
  })

  return (
    <>
      <Navbar />
      <Main bgColorProp="sm:bg-quaternaryGrey md:bg-secondaryWhite">
        <section className="sm:w-screen md:w-[400px] max-w-[400px] flex flex-col items-center justify-center rounded-3xl md:bg-quaternaryGrey md:m-8 p-8">
          {/* <SmallShopAlt className="text-primaryPink" height={125} width={125} /> */}
          <h1 className="text-3xl pb-5">SIGN IN</h1>
          {emailProvider}
          {oAuthProviders}
        </section>
      </Main>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  const callbackUrl = context.query.callbackUrl
  const redirectUrl = callbackUrl ? callbackUrl : '/pages/food-menu/food-menu'

  if (session) {
    return { redirect: { destination: redirectUrl } }
  }

  const providers = await getProviders()

  return {
    props: { providers: providers ?? [] },
  }
}
