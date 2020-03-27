import React from "react"
import { Link } from "gatsby"

import { localizeURL } from "../utils/localization"

import { languages } from "../locales"

const LanguageSwitcher = (props) => {
  const {
    language: currentLanguage,
    pagePath,
  } = props
  return (
    <nav>
      <ul>
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

export default LanguageSwitcher
