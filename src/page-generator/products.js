const path = require(`path`)

const { languages, defaultLanguageKey } = require('../locales')
const { localizeURL } = require('../utils/localization')

module.exports = async (createPage, graphql) => {
  const result = await graphql(`
    {
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
  languages.forEach(language =>{
    createPage({
      path: localizeURL(language, defaultLanguageKey, '/products'),
      component: path.resolve(`src/templates/products.js`),
      context: {
        language,
        products: result.data.allMarkdownRemark.edges.map(edge => {
          const {
            title: { [language]: title },
            description: { [language]: description },
            bg_image: bgImage,
            bg_title: { [language]: bgTitle },
          } = edge.node.frontmatter
          return {
            title,
            description,
            bgImage,
            bgTitle,
          }
        }),
      },
    })
  })
}