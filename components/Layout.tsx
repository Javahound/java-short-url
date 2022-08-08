import Nav from './Nav'
import Meta from './Meta'
import Footer from './Footer'
import Header from './Header'
import layoutStyles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={layoutStyles.container}>
        <main className={layoutStyles.main}>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout