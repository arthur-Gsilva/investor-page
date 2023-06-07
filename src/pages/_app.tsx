import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return(
    <>

    <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Asap:wght@400;500;600;700;800&display=swap" />
    </Head>

    <SessionProvider session={session}>
        <Component {...pageProps} />
    </SessionProvider>
    
    </>
  )
}
