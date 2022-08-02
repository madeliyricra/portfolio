import SocialNetwork from '../SocialNetwork'
import Header from './Header'

interface Ilayout {
   children: JSX.Element,
}

const Layout = ({children} : Ilayout) => {
  return (
    <>
      <Header />
      {children}
      <SocialNetwork />
    </>
  )
}

export default Layout