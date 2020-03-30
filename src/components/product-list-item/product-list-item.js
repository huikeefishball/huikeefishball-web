import React from "react"

import style from "./product-list-item.module.styl"

export const ProductListItem = (props) => {
  const {
    title,
    description,
    bgImage,
    bgTitle,
  } = props
  return (
    <li className={style.root}>
      <div className={style.imageWrapper}>
        <img
          className={style.image}
          src={bgImage}
          alt={title}
          role="presentation"
        />
      </div>
      <div className={style.intro}>
        <h2 className="h2 text-theme-yellow">{title}</h2>
        <p>{description}</p>
      </div>
      <span className={style.bgTitle}>{bgTitle}</span>
    </li>
  )
}
