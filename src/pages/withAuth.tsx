import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import { ComponentType } from 'react'

export default function withAuth<T>(Component: ComponentType<T>) {
  return function AuthenticatedComponent(props: T) {
    const { data: session, status } = useSession()
    const router = useRouter()

    if (status === 'loading') {
      return <div>Loading...</div>
    }

    if (!session) {
      router.replace('/api/auth/signin')
      return null
    }

    return <Component {...props} session={session} />
  }
}
