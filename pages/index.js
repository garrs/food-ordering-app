import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bataan Ramen</title>
        <meta name="description" content="Best ramen shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      homepage
    </div>
  )
}
