import DashboardContainer from '@/modules/dashboard/DashboardContainer'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dutch0x</title>
        <meta name="description" content="dutch0x app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardContainer />
    </>
  )
}
