import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Account from '../components/Account'

const inter = Inter({ subsets: ['latin'] })

export default function Dashboard({session}) {
  return (
    <>
      <Head>
        <title>Quest Dashboard</title>
      </Head>
      <div>
        <h1>Dashboard</h1>
        {/* <p> Settings </p>
        <Account session={session}/> */}
        <a href="/justice-pot"> Justice Pot</a>
      </div>

    </>
  )
}
