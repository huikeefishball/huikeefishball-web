import React from "react"

import { Layout } from "../components/layout"
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
      <section id="intro" className="bg-a">
        <div className="container mx-auto">
          <h1 className="h1 icon triangle">{restProps.pageTitle}</h1>
          <div>
            <div>
              <p className="h2 text-theme-yellow">{quoteContent}</p>
              <p>{quoteAuthor}</p>
            </div>
            <p>{pageDesciption}</p>
          </div>
        </div>
      </section>
      <ul className="list-reset">
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
