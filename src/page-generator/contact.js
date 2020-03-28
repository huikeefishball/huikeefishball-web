
const { createLocalizedPage } = require("./helper")

module.exports = async (params) => {
  await createLocalizedPage(params, (language) => {
    const {
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
    } = params.pageData
    return {
      context: {
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
    }
  })
}
