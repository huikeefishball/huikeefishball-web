const path = require(`path`)

const { languages } = require('../locales')
const {
  localizeURL,
  localizeMenu,
} = require('../utils/localization')

module.exports = async ({ gatsby, commonData, pageData }) => {
  const pagePath = pageData.path
  const { list_items } = pageData
  const productIdsList = list_items.map(({ id }) => id)
  const result = await gatsby.graphql(`
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
  }) => {
    const {
      site_title: { [language]: siteTitle },
      site_menu,
    } = commonData
    const siteMenu = localizeMenu(language, site_menu)
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
    gatsby.actions.createPage({
      path: localizeURL(language, pagePath),
      component: path.resolve(`src/templates/products.js`),
      context: {
        language,
        siteMenu,
        siteTitle,
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
