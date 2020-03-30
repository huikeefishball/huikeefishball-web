import React from "react"
import { Helmet } from "react-helmet"

import { SiteHeader } from "./site-header"
import { SiteFooter } from "./site-footer"

import "../styles/index.styl"

const importFontStyle = (language) => {
  let fontFamily = ""
  let subset = ""
  switch (language) {
    case "ja":
      fontFamily = "Noto+Sans+JP"
      subset = "japanese"
      break
    case "tc":
      fontFamily = "Noto+Sans+TC"
      subset = "chinese-traditional"
      break;
    default:
      fontFamily = "Noto+Sans"
      break;
  }
  return (
    <Helmet defer={false}>
      <link
        rel="stylesheet"
        href={`https://fonts.googleapis.com/css?family=${fontFamily}:300,400,700&display=swap${subset ? `subset=${subset}` : ''}`}
      />
      <style type="text/css">{`html{font-family: '${fontFamily.replace(/\+/g, ' ')}', sans-serif;}`}</style>
    </Helmet>
  )
}

const Layout = (props) => {
  const {
    children,
    language,
    siteMenu,
    siteTitle,
    siteFooterText,
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
      {importFontStyle(language)}
      <div>
        <SiteHeader
          language={language}
          pagePath={pagePath}
          siteMenu={siteMenu}
          siteTitle={siteTitle}
        />
        {children}
      </div>
      <SiteFooter text={siteFooterText} />
    </div>
  )
}

export default Layout
