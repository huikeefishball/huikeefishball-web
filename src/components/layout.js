import React from "react"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
