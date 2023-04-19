import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'
import { makeStore } from '../redux/store/store'
import { persistStore } from 'reduxjs-toolkit-persist'
import { SessionProvider } from 'next-auth/react'

const store = makeStore()
const persistor = persistStore(store)

export default function App({ Component, pageProps }: AppProps) {
  const { session } = pageProps

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </SessionProvider>
  )
}
