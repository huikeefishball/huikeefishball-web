import React from "react"

const ProductListItem = (props) => {
  const {
    title,
    description,
    bgImage,
    bgTitle,
  } = props
  return (
    <li>
      <img
        src={bgImage}
        alt={title}
        role="presentation"
      />
      <div>
        <h2 className="h2 text-theme-yellow">{title}</h2>
        <p>{description}</p>
        <span>{bgTitle}</span>
      </div>
    </li>
  )
}

export default ProductListItem
