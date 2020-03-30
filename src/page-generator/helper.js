const path = require(`path`)

const { languages } = require('../locales')
const {
  localizeURL,
  localizeMenu,
} = require('../utils/localization')

async function createLocalizedPage({ gatsby, commonData, pageData }, getCustomizedParams) {
  const pagePath = pageData.path
  languages.forEach(async ({ code: language }) => {
    const {
      site_title: { [language]: siteTitle },
      site_menu,
      site_footer_text: { [language]: siteFooterText },
    } = commonData
    const siteMenu = localizeMenu(language, site_menu)
    const {
      id: pageID,
      title: { [language]: pageTitle },
    } = pageData

    const customizedParams = await getCustomizedParams(language)

    gatsby.actions.createPage({
      path: localizeURL(language, pagePath),
      component: path.resolve(`src/templates/${pageID}.js`),
      context: {
        language,
        siteMenu,
        siteTitle,
        siteFooterText,
        pageID,
        pagePath,
        pageTitle,
        ...customizedParams.context
      },
    })
  })
}

module.exports = {
  createLocalizedPage,
}
