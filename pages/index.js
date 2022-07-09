import Head from 'next/head'
// import Image from 'next/image'
import Header from '../components/Header'
import LotteryEntrance from '../components/LotteryEntrance'


import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DeFi Lottery</title>
        <meta name="description" content="DeFi Lottery Smart Contract" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <LotteryEntrance />

    </div>
  )
}
