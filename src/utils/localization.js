const localizeURL = (language, defaultLanguageKey, url) => {
  return `/${language}${url}`.replace(`/${defaultLanguageKey}`, '')
}

module.exports = {
  localizeURL,
}
