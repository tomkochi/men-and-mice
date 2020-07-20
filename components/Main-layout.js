import Header from './Header'
import Footer from './Main-footer'
import '../public/css/global.css'

const Layout = (props) => {
  const { yellowfooter } = props
  return (
    <div className="layout">
      <Header />
      <div className="layout">{props.children}</div>
      <Footer yellowfooter={yellowfooter} />
    </div>
  )
}

export default Layout
