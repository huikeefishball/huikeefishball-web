const createProductPages = require('./src/page-generator/products')

exports.createPages = async ({ actions, graphql }) => {
  await createProductPages(actions.createPage, graphql)
}
