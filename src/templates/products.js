import React from "react"

import Layout from "../components/layout"
import ProductListItem from "../components/product-list-item"

const ProductsPage = (props) => {
  const {
    language,
    siteMenu,
    pagePath,
    pageTitle,
    pageDesciption,
    quoteAuthor,
    quoteContent,
    products,
  } = props.pageContext
  return (
    <Layout
      language={language}
      pagePath={pagePath}
      siteMenu={siteMenu}
    >
      <h1>{pageTitle}</h1>
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
