import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { IconContext } from 'react-icons'
import { wrapper } from '../redux/store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'
import { makeStore, persistConfig } from '../redux/store/store'
import { persistStore } from 'reduxjs-toolkit-persist'

const store = makeStore()
const persistor = persistStore(store)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <IconContext.Provider
        value={{
          size: '3rem',
          className: 'fill-primaryRed',
        }}
      >
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </IconContext.Provider>
    </Provider>
  )
}
