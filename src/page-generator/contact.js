const path = require(`path`)

const { languages } = require('../locales')
const {
  localizeURL,
  localizeMenu,
} = require('../utils/localization')

module.exports = async ({ gatsby, commonData, pageData }) => {
  const pagePath = pageData.path
  languages.forEach(({ 
    code: language,
  }) => {
    const {
      site_title: { [language]: siteTitle },
      site_menu,
    } = commonData
    const siteMenu = localizeMenu(language, site_menu)
    const {
      title: { [language]: pageTitle },
      contact_us: {
        title: { [language]: contactUsTitle },
        subtitle: { [language]: contactUsSubtitle },
        address: { [language]: contactUsAddress },
        phone: contactUsPhone,
        email: contactUsEmail,
      },
      join_us: {
        title: { [language]: joinUsTitle },
        subtitle: { [language]: joinUsSubtitle },
        phone: joinUsPhone,
        email: joinUsEmail,
      },
    } = pageData
    gatsby.actions.createPage({
      path: localizeURL(language, pagePath),
      component: path.resolve(`src/templates/contact.js`),
      context: {
        language,
        siteMenu,
        siteTitle,
        pagePath,
        pageTitle,
        contactUsTitle,
        contactUsSubtitle,
        contactUsAddress,
        contactUsPhone,
        contactUsEmail,
        joinUsTitle,
        joinUsSubtitle,
        joinUsPhone,
        joinUsEmail,
      },
    })
  })
}
