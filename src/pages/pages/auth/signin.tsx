import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next'
import { useState } from 'react'
import { getProviders, signIn } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../api/auth/[...nextauth]'
import { Main, Navbar, Button } from '@/components'
import { SmallShopAlt } from 'iconoir-react'

export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [email, setEmail] = useState('')

  const handleEmailSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await signIn('email', {
      email,
      callbackUrl: '/pages/food-menu/food-menu',
    })
  }

  const emailProvider = Object.values(providers).map((provider) => {
    if (provider.name === 'Email') {
      return (
        <div key={provider.name}>
          <form
            onSubmit={handleEmailSignIn}
            className="flex flex-col items-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
      <div key={provider.name}>
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
      <Main>
        <section className=" relative sm:w-11/12 md:w-[400px] max-w-[400px] flex flex-col items-center justify-center rounded-3xl p-6 md:p-8 bg-tertiaryGold">
          <SmallShopAlt className="text-primaryRed" height={125} width={125} />
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

  if (session) {
    return { redirect: { destination: '/pages/food-menu/food-menu' } }
  }

  const providers = await getProviders()

  return {
    props: { providers: providers ?? [] },
  }
}
