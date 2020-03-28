import React from "react"

import Header from "./header"
import Footer from "./footer"

import "../styles/index.scss"

const Layout = (props) => {
  const {
    children,
    language,
    siteMenu,
    pagePath,
  } = props 
  return (
    <div>
      <div>
        <Header
          language={language}
          pagePath={pagePath}
          siteMenu={siteMenu}
        />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
