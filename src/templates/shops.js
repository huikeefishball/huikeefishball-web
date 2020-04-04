import React from "react"
import GoogleMapReact from "google-map-react"

import style from "./shops.module.styl"
import mapStyles from "./shops.map.styles.json"

import { DecorStyle2 } from "../components/decor"
import { Layout } from "../components/layout"
import mapPin from "../assets/map-pin.png"

const ShopsPage = props => {
  const {
    shops,
    otherRetailsStoresTitle,
    otherRetailsStoresDescription,
    otherRetailsStoresButtonText,
    otherRetailsStoresButtonLink,
    googleMapsAPIKey,
    ...restProps
  } = props.pageContext

  const [defaultLng, defaultLat] = shops[0].location.coordinates
  const mapProps = {
    defaultCenter: {
      lat: defaultLat,
      lng: defaultLng,
    },
    defaultZoom: 12,
    options: { styles: mapStyles },
  }
  if (googleMapsAPIKey) {
    mapProps.bootstrapURLKeys = { key: googleMapsAPIKey }
  }

  return (
    <Layout {...restProps}>
      <section className={`${style.list} bg-c bg-mobile-clear`}>
        <DecorStyle2 className="no-wide" direction="left" />
        <DecorStyle2 className="no-wide" direction="right" />
        <div className="container mx-auto">
          <h2 className="h1 icon triangle">{restProps.pageTitle}</h2>
          <ul className="list-reset">
            {shops.map(shop => (
              <li key={shop.location.coordinates.join("")}>
                <h3 className="h3 text-theme-yellow">{shop.name}</h3>
                <ul className="icon-list">
                  <li className="icon map">{shop.address}</li>
                  <li className="icon phone">{shop.phone}</li>
                  <li className="icon clock">{shop.openingHours}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="map">
        <div className={`${style.map} container mx-auto`}>
          <GoogleMapReact {...mapProps}>
            {shops.map(shop => {
              const [lng, lat] = shop.location.coordinates
              return (
                <div
                  key={`${lat}${lng}`}
                  lat={lat}
                  lng={lng}
                  style={{ position: "relative", textAlign: "center" }}
                >
                  <img
                    src={mapPin}
                    alt={shop.name}
                    style={{ position: "absolute", bottom: 0, left: "-27px" }}
                  />
                </div>
              )
            })}
          </GoogleMapReact>
        </div>
      </section>
      <section className={style.retails}>
        <div className="container mx-auto">
          <h2 className="h1 icon triangle">{otherRetailsStoresTitle}</h2>
          <div>
            <p>{otherRetailsStoresDescription}</p>
            <a
              className="outlined text-theme-yellow"
              href={otherRetailsStoresButtonLink}
              alt={otherRetailsStoresButtonText}
              target="_blank"
              rel="noopener noreferrer"
            >
              {otherRetailsStoresButtonText}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ShopsPage
