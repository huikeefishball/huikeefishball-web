import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

import style from "./layout.module.styl"

import { Sidebar } from "../sidebar"
import { SiteHeader, SiteHeaderMin } from "../site-header"
import { SiteFooter } from "../site-footer"

import "../../styles/index.styl"

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

export const Layout = (props) => {
  const {
    children,
    language,
    siteMenu,
    siteTitle,
    siteFooterText,
    pagePath,
    pageTitle,
    pageHelperFacebookLink,
    pageHelperEmail,
  } = props

  const [sidebarStyle, setSidebarStyle] = useState({
    opacity: 0,
    pointerEvents: "none",
  })

  const [siteMenuMinStyle, setSiteMenuMinStyle] = useState({
    opacity: 0,
    pointerEvents: "none",
  })

  useScrollPosition(({ currPos }) => {
      const shouldShowSidebar = currPos.y < -window.innerHeight
      setSidebarStyle({
        opacity: shouldShowSidebar ? 1 : 0,
        pointerEvents: shouldShowSidebar ? "all" : "none",
      })
      const shouldShowMinMenu = currPos.y < -250
      setSiteMenuMinStyle({
        transform: `translateY(${shouldShowMinMenu ? 0 : "-100%"})`,
        pointerEvents: shouldShowMinMenu ? "all" : "none",
      })
    },
    [sidebarStyle]
  )
  
  return (
    <div className={style.root}>
      <Helmet defer={false} defaultTitle={siteTitle} titleTemplate={`%s | ${siteTitle}`}>
        <html lang={language} />
          <title>{pageTitle}</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
      </Helmet>
      {importFontStyle(language)}
      <div className={style.content}>
        <SiteHeader
          language={language}
          pagePath={pagePath}
          siteMenu={siteMenu}
          siteTitle={siteTitle}
          siteFooterText={siteFooterText}
          pageHelperFacebookLink={pageHelperFacebookLink}
          pageHelperEmail={pageHelperEmail}
        />
        <SiteHeaderMin
          language={language}
          pagePath={pagePath}
          siteMenu={siteMenu}
          siteTitle={siteTitle}
          style={siteMenuMinStyle}
        />
        <Sidebar
          className={style.sidebar}
          facebookLink={pageHelperFacebookLink}
          email={pageHelperEmail}
          isShowGoToTop
          style={sidebarStyle}
        />
        {children}
      </div>
      <SiteFooter text={siteFooterText} />
    </div>
  )
}
