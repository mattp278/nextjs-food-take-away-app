import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next'
import { getProviders, signIn } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]'
import { Main, Navbar, Button } from '@/components'
import { SmallShopAlt } from 'iconoir-react'

export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const providersElements = Object.values(providers).map((provider) => (
    <div key={provider.name}>
      <Button
        type="button"
        onClick={() => signIn(provider.id)}
        text={`Sign in with ${provider.name}`}
        optionalClassNames="w-[200px] min-w-[150px] rounded-lg m-2"
      />
    </div>
  ))

  return (
    <>
      <Navbar />
      <Main>
        <section className=" relative sm:w-11/12 md:w-[400px] max-w-[400px] flex flex-col items-center justify-center rounded-3xl p-6 md:p-8 bg-tertiaryGold">
          <SmallShopAlt className="text-primaryRed" height={125} width={125} />
          <h1 className="text-3xl pb-5">SIGN IN</h1>
          {providersElements}
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
