const path = require(`path`)

const { languages } = require('../locales')
const { localizeURL } = require('../utils/localization')

module.exports = async (createPage) => {
  languages.forEach(({ 
    code: language,
  }) =>{
    const pagePath = "/shops"
    createPage({
      path: localizeURL(language, pagePath),
      component: path.resolve(`src/templates/shops.js`),
      context: {
        language,
        pagePath,
      },
    })
  })
}
