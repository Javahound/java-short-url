import Link from 'next/link'
import Image from 'next/image'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul className={navStyles.pageName}>
        <li>
          <h1 className={navStyles.h1}>Javahound.site</h1>
        </li>
      </ul>
    </nav>
  )
}

export default Nav