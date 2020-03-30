import React from "react"

import { Layout } from "../components/layout"

const ShopsPage = (props) => {
  const {
    shops,
    otherRetailsStoresTitle,
    otherRetailsStoresDescription,
    otherRetailsStoresButtonText,
    otherRetailsStoresButtonLink,
    ...restProps
  } = props.pageContext
  return (
    <Layout {...restProps}>
      <section>
        <h2>{restProps.pageTitle}</h2>
        <ul>
          {shops.map(shop => (
            <li key={shop.name}>
              <h3>{shop.name}</h3>
              <address>{shop.address}</address>
              <phone>{shop.phone}</phone>
              <div>{shop.openingHours}</div>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>{otherRetailsStoresTitle}</h2>
        <div>
          <p>{otherRetailsStoresDescription}</p>
          <a
            href={otherRetailsStoresButtonLink}
            alt={otherRetailsStoresButtonText}
            target="_blank"
            rel="noopener noreferrer"
          >{otherRetailsStoresButtonText}</a>
        </div>
      </section>
    </Layout>
  )
}

export default ShopsPage
