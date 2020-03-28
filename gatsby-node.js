const fs = require("fs")
const path = require(`path`)
const yaml = require("js-yaml")

const createHomePages = require('./src/page-generator/home')
const createProductsPages = require('./src/page-generator/products')
const createShopsPages = require('./src/page-generator/shops')
const createContactPages = require('./src/page-generator/contact')

exports.createPages = async (gatsby) => {
  const homePageData = yaml.safeLoad(fs.readFileSync(path.resolve("data/home_page.yml"), "utf-8"))
  const productPageData = yaml.safeLoad(fs.readFileSync(path.resolve("data/products_page.yml"), "utf-8"))
  const shopsPageData = yaml.safeLoad(fs.readFileSync(path.resolve("data/shops_page.yml"), "utf-8"))
  const contactPageData = yaml.safeLoad(fs.readFileSync(path.resolve("data/contact_page.yml"), "utf-8"))
  await createHomePages({ gatsby, pageData: homePageData })
  await createProductsPages({ gatsby, pageData: productPageData })
  await createShopsPages({ gatsby, pageData: shopsPageData })
  await createContactPages({ gatsby, pageData: contactPageData })
}
