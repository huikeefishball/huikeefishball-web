import React from "react"
import { Link } from "gatsby"

import LanguageSwitcher from "./language-switcher"

import { localizeURL } from "../utils/localization"

const Header = (props) => {
  const {
    language,
    pagePath,
  } = props

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={localizeURL(language, "/")}>Home</Link>
          </li>
          <li>
            <Link to={localizeURL(language, "/products")}>Products</Link>
          </li>
          <li>
            <Link to={localizeURL(language, "/shops")}>Shops</Link>
          </li>
          <li>
            <Link to={localizeURL(language, "/contact")}>Contact</Link>
          </li>
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
