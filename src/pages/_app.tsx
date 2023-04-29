import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'
import { makeStore } from '../redux/store/store'
import { persistStore } from 'reduxjs-toolkit-persist'
import { SessionProvider } from 'next-auth/react'
import localFont from '@next/font/local'

const store = makeStore()
const persistor = persistStore(store)
const brandonGrotFont = localFont({
  src: [
    {
      path: '../../public/fonts/Brandon_reg.otf',
      weight: '400',
    },
    {
      path: '../../public/fonts/Brandon_bld.otf',
      weight: '700',
    },
    {
      path: '../../public/fonts/Brandon_blk.otf',
      weight: '900',
    },
  ],
  variable: '--font-brandon',
})

export default function App({ Component, pageProps }: AppProps) {
  const { session } = pageProps

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <main className={brandonGrotFont.className}>
            <Component {...pageProps} />
          </main>
        </PersistGate>
      </Provider>
    </SessionProvider>
  )
}
