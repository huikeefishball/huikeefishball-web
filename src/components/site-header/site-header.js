import React, { useState, useCallback } from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import classnames from "classnames"

import style from "./site-header.module.styl"

import { LanguageSwitcher } from "../language-switcher"
import { Sidebar } from "../sidebar"
import { SiteFooter } from "../site-footer"

import { localizeURL } from "../../utils/localization"
import logo from "../../assets/logo.svg"

export const SiteHeader = props => {
  const {
    language,
    siteMenu,
    siteTitle,
    siteFooterText,
    pagePath,
    pageHelperFacebookLink,
    pageHelperEmail,
  } = props

  const [isModalOpen, setIsModalOpen] = useState(false)

  const onPressHamburger = useCallback(() => {
    setIsModalOpen(!isModalOpen)
  }, [isModalOpen])

  return (
    <header>
      <Helmet>
        {/* eslint-disable-next-line jsx-a11y/html-has-lang */}
        <html is-modal-open={isModalOpen} />
      </Helmet>
      <div className={style.banner}>
        <div
          className={classnames(style.headerModal, "bg-c", {
            [style.headerModalOpened]: isModalOpen,
          })}
        >
          <header>
            <Sidebar
              facebookLink={pageHelperFacebookLink}
              email={pageHelperEmail}
            />
          </header>
          <div>
            <nav className={classnames(style.mainMenu, "mx-auto")}>
              <ul className="list-reset">
                {siteMenu.map(({ key, title, path }) => (
                  <li
                    key={key}
                    className={classnames({
                      [style.active]: path === pagePath,
                    })}
                  >
                    <Link
                      to={localizeURL(language, path)}
                      onClick={onPressHamburger}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <LanguageSwitcher
              className={style.languageSwitcher}
              language={language}
              pagePath={pagePath}
            />
          </div>
          <SiteFooter text={siteFooterText} />
        </div>
        <img className={style.logo} src={logo} alt={siteTitle} />
        <button
          className={classnames(style.hamburger, {
            [style.hamburgerPressed]: isModalOpen,
          })}
          onClick={onPressHamburger}
        >
          <div>
            <span />
            <span />
            <span />
          </div>
        </button>
      </div>
      <div className={classnames(style.nav)}>
        <div className="container mx-auto">
          <LanguageSwitcher
            language={language}
            pagePath={pagePath}
            style={{ visibility: "hidden" }}
          />
          <nav className={style.mainMenu}>
            <ul className="list-reset">
              {siteMenu.map(({ key, title, path }) => (
                <li
                  key={key}
                  className={classnames({ [style.active]: path === pagePath })}
                >
                  <Link to={localizeURL(language, path)}>{title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageSwitcher
            className={style.languageSwitcher}
            language={language}
            pagePath={pagePath}
          />
        </div>
      </div>
    </header>
  )
}
