import React from "react"
import classnames from "classnames"

import style from "./product-list-item.module.styl"

export const ProductListItem = props => {
  const { title, description, descriptionPosition, bgImage, bgTitle } = props
  const introClassName = classnames(style.intro, {
    [style.introRight]: descriptionPosition === "right",
  })
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
      <div className={style.contentWrapper}>
        <div className={`${style.contentWrapperInner} container mx-auto`}>
          <div className={introClassName}>
            <h2 className="h2 text-theme-yellow">{title}</h2>
            <p>{description}</p>
          </div>
          <span className={style.bgTitle}>{bgTitle}</span>
        </div>
      </div>
    </li>
  )
}
