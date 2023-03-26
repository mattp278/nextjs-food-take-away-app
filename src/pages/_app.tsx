import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { IconContext } from 'react-icons'
import { wrapper } from '../redux/store/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps)
  return (
    <Provider store={store}>
      <IconContext.Provider
        value={{
          size: '3rem',
          className: 'fill-primaryRed',
        }}
      >
        <Component {...pageProps} />
      </IconContext.Provider>
    </Provider>
  )
}
