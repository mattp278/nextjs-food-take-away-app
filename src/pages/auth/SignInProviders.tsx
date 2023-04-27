import { useState } from 'react'
import { Button } from '@/components'
import { signIn } from 'next-auth/react'

export const SignInProviders = ({ providers }) => {
  const [email, setEmail] = useState('')

  const handleEmailSignIn = async (e) => {
    e.preventDefault()
    await signIn('email', { email, callbackUrl: '/pages/food-menu/food-menu' })
  }

  const oAuthProviders = Object.values(providers).map((provider) => {
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
            <button
              type="submit"
              className="w-full p-2 mt-2 rounded bg-blue-500 text-white"
            >
              Sign in with Email
            </button>
          </form>
        </div>
      )
    }

    return (
      <div key={provider.name}>
        <Button
          type="button"
          onClick={() => signIn(provider.id)}
          text={`Sign in with ${provider.name}`}
          optionalClassNames="w-[200px] min-w-[150px] rounded-lg m-2"
        />
      </div>
    )
  })

  return <>{oAuthProviders}</>
}
