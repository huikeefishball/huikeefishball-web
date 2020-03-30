const { createLocalizedPage } = require("./helper")

module.exports = async (params) => {
  await createLocalizedPage(params, (language) => {
    const {
      other_retails_stores: {
        title: { [language]: otherRetailsStoresTitle },
        description: { [language]: otherRetailsStoresDescription },
        button_text: { [language]: otherRetailsStoresButtonText },
        button_link: otherRetailsStoresButtonLink,
      },
      list_items,
    } = params.pageData
    return {
      context: {
        otherRetailsStoresTitle,
        otherRetailsStoresDescription,
        otherRetailsStoresButtonText,
        otherRetailsStoresButtonLink,
        shops: list_items.map((shop) => ({
          name: shop.name[language],
          address: shop.name[language],
          phone: shop.phone,
          openingHours: shop.opening_hours,
          location: JSON.parse(shop.location),
        })),
        googleMapsAPIKey: process.env.GOOGLE_MAPS_API_KEY,
      },
    }
  })
}
