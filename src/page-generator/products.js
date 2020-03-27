const path = require(`path`)

const { languages } = require('../locales')
const { localizeURL } = require('../utils/localization')

module.exports = async (createPage, graphql) => {
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
    const pagePath = "/products"
    createPage({
      path: localizeURL(language, pagePath),
      component: path.resolve(`src/templates/products.js`),
      context: {
        language,
        pagePath,
        products: result.data.allMarkdownRemark.edges.map(edge => {
          const {
            id,
            title: { [language]: title },
            description: { [language]: description },
            bg_image: bgImage,
            bg_title: { [language]: bgTitle },
          } = edge.node.frontmatter
          return {
            id,
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