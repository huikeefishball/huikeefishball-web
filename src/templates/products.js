import React from "react"

import Layout from "../components/layout"

const ProductsPage = (props) => {
  const { products } = props.pageContext
  return (
    <Layout>
      <h1>Products</h1>
      <ul>
        {products.map(product => {
          const {
            title,
            description,
            bgImage,
            bgTitle,
          } = product
          return (
            <li>
              <img
                src={bgImage}
                alt={title}
                role="presentation"
              />
              <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <span>{bgTitle}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default ProductsPage
