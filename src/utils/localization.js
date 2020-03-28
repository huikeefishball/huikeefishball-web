const { defaultLanguageKey } = require("../locales")

const localizeMenu = (language, menu) => {
  return menu.map(({ title, ...rest }) => ({ ...rest, title: title[language] }))
}

const localizeURL = (language, url) => {
  return `/${language}${url}`.replace(`/${defaultLanguageKey}`, '')
}

module.exports = {
  localizeURL,
  localizeMenu,
}
