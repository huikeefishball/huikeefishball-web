import React from "react"
import { Helmet } from "react-helmet"

import Header from "./header"
import Footer from "./footer"

import "../styles/index.styl"

const Layout = (props) => {
  const {
    children,
    language,
    siteMenu,
    siteTitle,
    pagePath,
    pageTitle,
  } = props 
  return (
    <div>
      <Helmet defer={false} defaultTitle={siteTitle} titleTemplate={`%s | ${siteTitle}`}>
        <html lang={language} />
          <title>{pageTitle}</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
      </Helmet>
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
