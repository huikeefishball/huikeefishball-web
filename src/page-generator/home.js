const path = require(`path`)

const { languages } = require('../locales')
const { localizeURL } = require('../utils/localization')

module.exports = async ({ gatsby, pageData }) => {
  languages.forEach(({ 
    code: language,
  }) =>{
    const pagePath = "/"
    const {
      title: { [language]: pageTitle },
      slides,
      about_us: {
        title: { [language]: aboutUsTitle },
        content: { [language]: aboutUsContent },
        quote: {
          content: { [language]: aboutUsQuoteContent },
          author: { [language]: aboutUsQuoteAuthor },
        },
      },
      certification: {
        title: { [language]: certificationTitle },
        content: { [language]: certificationContent },
        certifications,
        quote: {
          content: { [language]: certificationQuoteContent },
          author: { [language]: certificationQuoteAuthor },
        },
      },
      team: {
        title: { [language]: teamTitle },
        content: { [language]: teamContent },
        quote: {
          content: { [language]: teamQuoteContent },
          author: { [language]: teamQuoteAuthor },
        },
      },
    } = pageData
    gatsby.actions.createPage({
      path: localizeURL(language, pagePath),
      component: path.resolve(`src/templates/home.js`),
      context: {
        language,
        pagePath,
        pageTitle,
        slides,
        aboutUsTitle,
        aboutUsContent,
        aboutUsQuoteContent,
        aboutUsQuoteAuthor,
        certificationTitle,
        certificationContent,
        certifications,
        certificationQuoteContent,
        certificationQuoteAuthor,
        teamTitle,
        teamContent,
        teamQuoteContent,
        teamQuoteAuthor,
      },
    })
  })
}
