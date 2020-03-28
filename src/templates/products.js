import React from "react"

import Layout from "../components/layout"
import ProductListItem from "../components/product-list-item"

const ProductsPage = (props) => {
  const {
    pageDesciption,
    quoteAuthor,
    quoteContent,
    products,
    ...restProps
  } = props.pageContext
  return (
    <Layout {...restProps}>
      <h1>{restProps.pageTitle}</h1>
      <div>
        <div>
          <p>{quoteContent}</p>
          <p>{quoteAuthor}</p>
        </div>
        <p>{pageDesciption}</p>
      </div>
      <ul>
        {products.map(product => (
          <ProductListItem
            key={product.id}
            {...product}
          />
        ))}
      </ul>
    </Layout>
  )
}

export default ProductsPage
