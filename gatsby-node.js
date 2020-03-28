const fs = require("fs")
const path = require(`path`)
const yaml = require("js-yaml")

const createHomePages = require('./src/page-generator/home')
const createProductsPages = require('./src/page-generator/products')
const createShopsPages = require('./src/page-generator/shops')
const createContactPages = require('./src/page-generator/contact')

const pageOrder = [
  "home",
  "products",
  "shops",
  "contact",
]

exports.createPages = async (gatsby) => {
  const pageData = pageOrder.reduce((acc, key) => {
    acc[key] = yaml.safeLoad(fs.readFileSync(path.resolve(`data/${key}_page.yml`), "utf-8"))
    return acc
  }, {})
  
  const commonData = {
    siteMenu: pageOrder.map(key => {
      const {
        path: pagePath,
        menu_title: title,
      } = pageData[key]
      return {
        key,
        path: pagePath,
        title,
      }
    })
  }

  await Promise.all([
    createHomePages({ gatsby, commonData, pageData: pageData.home }),
    createProductsPages({ gatsby, commonData, pageData: pageData.products }),
    createShopsPages({ gatsby, commonData, pageData: pageData.shops }),
    createContactPages({ gatsby, commonData, pageData: pageData.contact }),
  ])
}
