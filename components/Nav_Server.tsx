import Link from 'next/link'
import Image from 'next/image'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul className={navStyles.pageName}>
        <li>
          <Image src={'/logo_mc.png'} alt={'Logo'} width={50} height={50} className={navStyles.img} />
        </li>
        <li>
          <h1 className={navStyles.h1}>LoF - Minecraft Server</h1>
        </li>
      </ul>
      <ul className={navStyles.navigation}>
        <li>
          <Link href='/'>Home</Link>
        </li>
         <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/mc_server'>My MC Server</Link>
        </li>
        <li>
          <Link href='/login'>Anmelden</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav