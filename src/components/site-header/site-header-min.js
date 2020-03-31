import React from "react"
import { Link } from "gatsby"
import classnames from "classnames"

import style from "./site-header-min.module.styl"

import { LanguageSwitcher } from "../language-switcher"

import { localizeURL } from "../../utils/localization"
import logo from "../../assets/logo.svg"

export const SiteHeaderMin = (props) => {
  const {
    language,
    siteMenu,
    siteTitle,
    pagePath,
  } = props

  return (
    <header className={style.root} style={props.style}>  
      <div className="container mx-auto">
        <img className={style.logo} src={logo} alt={siteTitle} /> 
        <nav className={style.menu}>
          <ul className="list-reset">
            {siteMenu.map(({ key, title, path }) => (
              <li key={key}>
                <Link
                  className={classnames("outlined", { [style.active]: path === pagePath })}
                  to={localizeURL(language, path)}
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
    </header>
  )
}
