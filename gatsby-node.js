const createHomePages = require('./src/page-generator/home')
const createProductsPages = require('./src/page-generator/products')
const createShopsPages = require('./src/page-generator/shops')
const createContactPages = require('./src/page-generator/contact')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  await createHomePages(createPage, graphql)
  await createProductsPages(createPage, graphql)
  await createShopsPages(createPage, graphql)
  await createContactPages(createPage, graphql)
}
