import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next'
import { useState } from 'react'
import { getProviders, signIn } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]'
import { Main, Navbar, Button } from '@/components'
import { SmallShopAlt } from 'iconoir-react'
import { SignInProviders } from './signInProviders'

export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  //

  return (
    <>
      <Navbar />
      <Main>
        <section className=" relative sm:w-11/12 md:w-[400px] max-w-[400px] flex flex-col items-center justify-center rounded-3xl p-6 md:p-8 bg-tertiaryGold">
          <SmallShopAlt className="text-primaryRed" height={125} width={125} />
          <h1 className="text-3xl pb-5">SIGN IN</h1>
          <SignInProviders providers={providers} />
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
