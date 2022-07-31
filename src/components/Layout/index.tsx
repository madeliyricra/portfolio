import React from 'react'

interface ILayoutProps {
  children?: JSX.Element,
}

const Layout = ({children}: ILayoutProps) => {
  return (
    <div>
      <h2>Layout</h2>
      <div>
       {children}
      </div>
    </div>
  )
}

export default Layout