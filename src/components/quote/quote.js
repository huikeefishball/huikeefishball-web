import React from "react"

import style from "./quote.module.styl"

export const Quote = (props) => {
  const {
    text,
    author,
    position = "center",
  } = props
  return (
    <aside className={`${style[position]}`}>
      <p className={`${style.text} h2 text-theme-yellow`}>{text}</p>
      <div className={style.author}>{author}</div>
    </aside>
  )
}
