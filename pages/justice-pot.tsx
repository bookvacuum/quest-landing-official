import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Justice Pot</title>
      </Head>

      <a href="/stories/sunwoo"> First Story: Sunwoo Lee's Story, 3 verified sources</a>
    </>
  )
}
