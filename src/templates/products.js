import React from "react"

import style from "./products.module.styl"

import { Layout } from "../components/layout"
import { Quote } from "../components/quote"
import { ProductListItem } from "../components/product-list-item"

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
      <section id="intro" className={`${style.intro} bg-a`}>
        <div className="container mx-auto">
          <h1 className="h1 icon triangle">{restProps.pageTitle}</h1>
          <div className={`${style.introContent} mx-auto`}>
            <Quote
              text={quoteContent}
              author={quoteAuthor}
            />
            <p className={style.description}>{pageDesciption}</p>
          </div>
        </div>
      </section>
      <section id="items">
        <div className={`${style.list} container mx-auto`}>
          <ul className="list-reset">
            {products.map(product => (
              <ProductListItem
                key={product.id}
                {...product}
              />
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default ProductsPage
