import React from "react"
import { Link } from "gatsby"

import LanguageSwitcher from "./language-switcher"

import { localizeURL } from "../utils/localization"

const Header = (props) => {
  const {
    language,
    siteMenu,
    pagePath,
  } = props

  return (
    <header>
      <nav>
        <ul>
          {siteMenu.map(({ key, title, path }) => (
            <li
              key={key}
              className={`${path === pagePath ? "active" : ''}`}
            >
              <Link to={localizeURL(language, path)}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <LanguageSwitcher
        language={language}
        pagePath={pagePath}
      />
    </header>
  )
}

export default Header
