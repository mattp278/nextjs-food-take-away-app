import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { IconContext } from 'react-icons'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IconContext.Provider
      value={{
        size: '3rem',
        className: 'fill-primaryRed',
      }}
    >
      <Component {...pageProps} />
    </IconContext.Provider>
  )
}
