import Header from './Header'

interface Ilayout {
   children: JSX.Element,
}

const Layout = ({children} : Ilayout) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout