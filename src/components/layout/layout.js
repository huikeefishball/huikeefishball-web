import React, { useCallback } from "react"
import { Helmet } from "react-helmet"

import style from "./layout.module.styl"

import { SiteHeader } from "../site-header"
import { SiteFooter } from "../site-footer"

import "../../styles/index.styl"

import FbIcon from  "../../assets/sidebar/fb.svg"
import MailIcon from  "../../assets/sidebar/mail.svg"
import TopIcon from  "../../assets/sidebar/top.svg"

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

  const onPressGoToTop = useCallback(() => {
    document.querySelector("body").scrollIntoView({ 
      behavior: "smooth" 
    });
  })
  
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
        />
        <div className={style.sidebar}>
          <ul className="list-reset">
            <li className={style.sidebarItem}>
              <a href={pageHelperFacebookLink} target="_blank" rel="noopener noreferrer">
                <img src={FbIcon} />
              </a>
            </li>
            <li className={style.sidebarItem}>
              <a href={`mailto:${pageHelperEmail}`}>
                <img src={MailIcon} />
              </a>
            </li>
            <li className={style.sidebarItem}>
              <button onClick={onPressGoToTop}>
                <img src={TopIcon} />
              </button>
            </li>
          </ul>
        </div>
        {children}
      </div>
      <SiteFooter text={siteFooterText} />
    </div>
  )
}
