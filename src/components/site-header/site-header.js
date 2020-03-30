import React, { useState, useCallback } from "react"
import { Link } from "gatsby"
import classnames from "classnames"

import style from "./site-header.module.styl"

import { LanguageSwitcher } from "../language-switcher"

import { localizeURL } from "../../utils/localization"
import logo from "../../assets/logo.svg"

export const SiteHeader = (props) => {
  const {
    language,
    siteMenu,
    siteTitle,
    pagePath,
  } = props

  const [isModalOpen, setIsModalOpen] = useState(false)

  const onPressHamburger = useCallback(() => {
    setIsModalOpen(!isModalOpen)
  }, [isModalOpen])

  return (
    <header>
      <div className={style.banner}>
        <div className={classnames(style.headerModal, { [style.headerModalOpened]: isModalOpen })}>
          <header />
          <div>
            <nav className={classnames(style.mainMenu, "mx-auto")}>
              <ul className="list-reset">
                {siteMenu.map(({ key, title, path }) => (
                  <li
                    key={key}
                    className={classnames({ [style.active]: path === pagePath })}
                  >
                    <Link
                      to={localizeURL(language, path)}
                      onClick={onPressHamburger}
                    >{title}</Link>
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
          <footer />
        </div>
        <img src={logo} alt={siteTitle} />
        <div 
          className={classnames(style.hamburger, { [style.hamburgerPressed]: isModalOpen })}
          onClick={onPressHamburger}
        >
          <div>
            <span /> 
            <span /> 
            <span /> 
          </div>
        </div>
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
