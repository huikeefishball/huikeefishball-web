const { createLocalizedPage } = require("./helper")

module.exports = async params => {
  const { list_items } = params.pageData
  const productIdsList = list_items.map(({ id }) => id)
  const result = await params.gatsby.graphql(`
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
              description_position
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
  await createLocalizedPage(params, language => {
    const {
      description: { [language]: pageDesciption },
      quote: {
        content: { [language]: quoteContent },
        author: { [language]: quoteAuthor },
      },
    } = params.pageData
    const products = result.data.allMarkdownRemark.edges.reduce((acc, edge) => {
      const {
        id,
        title: { [language]: title },
        description: { [language]: description },
        description_position: descriptionPosition,
        bg_image: bgImage,
        bg_title: { [language]: bgTitle },
      } = edge.node.frontmatter
      acc[id] = {
        id,
        title,
        description,
        descriptionPosition,
        bgImage,
        bgTitle,
      }
      return acc
    }, {})
    return {
      context: {
        pageDesciption,
        quoteContent,
        quoteAuthor,
        products: productIdsList.map(productId => products[productId]),
      },
    }
  })
}
