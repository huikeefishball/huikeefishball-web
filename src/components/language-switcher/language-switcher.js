import React from "react"
import { Link } from "gatsby"
import classnames from "classnames"

import style from "./language-switcher.module.styl"

import { localizeURL } from "../../utils/localization"

import { languages } from "../../locales"

export const LanguageSwitcher = props => {
  const { language: currentLanguage, pagePath } = props
  return (
    <nav
      className={classnames(style.root, props.className)}
      style={props.style}
    >
      <ul className="list-reset">
        {languages.map(({ code: language, name }) => (
          <li key={language}>
            {language === currentLanguage ? (
              <span>{name}</span>
            ) : (
              <Link to={localizeURL(language, pagePath)}>{name}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
