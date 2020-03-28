const path = require(`path`)

const { languages } = require('../locales')
const { localizeURL } = require('../utils/localization')

module.exports = async ({ gatsby, pageData }) => {
  languages.forEach(({ 
    code: language,
  }) =>{
    const pagePath = "/contact"
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
