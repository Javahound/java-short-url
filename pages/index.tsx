import Head from "next/head"
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { titleBotName } from '../components/title'
import styles from '../styles/Home.module.css'
import Router from "next/router"
import Image from "next/image"
import Meta from "../components/Meta"
import lStyle from "../styles/Login.module.css"

const title = "Home - " + titleBotName

const web = () => {
  Router.push('https://javahound.site/')
}
const tt = () => {
  Router.push('https://tiktok.com/@javahound')
}
const yt = () => {
  Router.push('https://www.youtube.com/channel/UCSVnpu3ySkQsOQPb50qrQyg')
}
const twitch = () => {
  Router.push('https://twitch.tv/justjavahound')
}
const twitter = () => {
  Router.push('https://twitter.com/JustJavahound')
}

function Home() {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Meta title={title} />
        <div className="page aligned-center">
          <Image className={lStyle.image} src="/logo.png" alt="logo" width={200} height={200} />
          <div className="spacing"></div>
          <div className={lStyle.login}>
            
            <button className={styles.btn} onClick={web}>My Website</button>
            <button className={styles.btn} onClick={tt}>TikTok</button>
            <button className={styles.btn} onClick={yt}>Youtube</button>
            <button className={styles.btn} onClick={twitch}>Twitch</button>
            <button className={styles.btn} onClick={twitter}>Twitter</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default Home