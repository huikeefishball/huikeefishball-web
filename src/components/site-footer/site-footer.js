import React from "react"

import style from "./site-footer.module.styl"

export const SiteFooter = props => {
  const { text = "" } = props
  return (
    <footer className={style.root}>
      <div className="container mx-auto">
        {text.replace("{{year}}", new Date().getFullYear())}
      </div>
    </footer>
  )
}
