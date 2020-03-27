import React from "react"

import Layout from "../components/layout"
import ProductListItem from "../components/product-list-item"

const ProductsPage = (props) => {
  const {
    language,
    pagePath,
    products,
  } = props.pageContext
  return (
    <Layout
      language={language}
      pagePath={pagePath}
    >
      <h1>Products</h1>
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
