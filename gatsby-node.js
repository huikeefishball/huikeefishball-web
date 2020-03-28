const fs = require("fs")
const path = require(`path`)
const yaml = require("js-yaml")

const createHomePages = require('./src/page-generator/home')
const createProductsPages = require('./src/page-generator/products')
const createShopsPages = require('./src/page-generator/shops')
const createContactPages = require('./src/page-generator/contact')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const productPageData = yaml.safeLoad(fs.readFileSync(path.resolve("data/products_page.yml"), "utf-8"))
  const shopsPageData = yaml.safeLoad(fs.readFileSync(path.resolve("data/shops_page.yml"), "utf-8"))
  await createHomePages(createPage, graphql)
  await createProductsPages(createPage, graphql, productPageData)
  await createShopsPages(createPage, graphql, shopsPageData)
  await createContactPages(createPage, graphql)
}
