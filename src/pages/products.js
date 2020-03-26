import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

const ProductsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/products/" } }) {
        edges {
          node {
            frontmatter {
              title {
                en
                ja
                tc
              }
              description {
                en
                ja
                tc
              }
              bg_image
              bg_title {
                en
                ja
                tc
              }
            }
          }
        }
      }
    }
  `)

  console.log(data)

  const locale = "en"
  return (
    <Layout>
      <h1>Products</h1>
      <ul>
        {data.allMarkdownRemark.edges.map(edge => {
          const {
            title: { [locale]: title },
            description: { [locale]: description },
            bg_image: bgImage,
            bg_title: { [locale]: bgTitle },
          } = edge.node.frontmatter
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
