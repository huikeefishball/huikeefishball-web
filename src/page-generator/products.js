const path = require(`path`)

const { languages } = require('../locales')
const { localizeURL } = require('../utils/localization')

module.exports = async (createPage, graphql, pageData) => {
  const pagePath = "/products"
  const { list_items } = pageData
  const productIdsList = list_items.map(({ id }) => id)
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/products/" } }) {
        edges {
          node {
            frontmatter {
              id
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
  languages.forEach(({ 
    code: language,
  }) =>{
    const {
      title: { [language]: pageTitle },
      description: { [language]: pageDesciption },
      quote: {
        content: { [language]: quoteContent },
        author: { [language]: quoteAuthor },
      },
    } = pageData
    const products = result.data.allMarkdownRemark.edges.reduce((acc, edge) => {
      const {
        id,
        title: { [language]: title },
        description: { [language]: description },
        bg_image: bgImage,
        bg_title: { [language]: bgTitle },
      } = edge.node.frontmatter
      acc[id] = {
        id,
        title,
        description,
        bgImage,
        bgTitle,
      }
      return acc
    }, {})
    createPage({
      path: localizeURL(language, pagePath),
      component: path.resolve(`src/templates/products.js`),
      context: {
        language,
        pagePath,
        pageTitle,
        pageDesciption,
        quoteContent,
        quoteAuthor,
        products: productIdsList.map(productId => products[productId]),
      },
    })
  })
}
