const path = require(`path`)

const { languages } = require('../locales')
const { localizeURL } = require('../utils/localization')

module.exports = async ({ gatsby, pageData }) => {
  languages.forEach(({ 
    code: language,
  }) =>{
    const pagePath = "/shops"
    const {
      title: { [language]: pageTitle },
      other_retails_stores: {
        title: { [language]: otherRetailsStoresTitle },
        description: { [language]: otherRetailsStoresDescription },
        button_text: { [language]: otherRetailsStoresButtonText },
        button_link: otherRetailsStoresButtonLink,
      },
      list_items,
    } = pageData
    gatsby.actions.createPage({
      path: localizeURL(language, pagePath),
      component: path.resolve(`src/templates/shops.js`),
      context: {
        language,
        pagePath,
        pageTitle,
        otherRetailsStoresTitle,
        otherRetailsStoresDescription,
        otherRetailsStoresButtonText,
        otherRetailsStoresButtonLink,
        shops: list_items.map((shop) => ({
          name: shop.name[language],
          address: shop.name[language],
          phone: shop.phone,
          openingHours: shop.opening_hours,
          locaiton: shop.locaiton,
        }))
      },
    })
  })
}
