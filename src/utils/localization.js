const { defaultLanguageKey } = require("../locales")

const localizeURL = (language, url) => {
  return `/${language}${url}`.replace(`/${defaultLanguageKey}`, '')
}

module.exports = {
  localizeURL,
}
