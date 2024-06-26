import React from "react"

import style from "./contact.module.styl"

import {
  DecorStyle1Left,
  DecorStyle1Right,
  DecorStyle2,
} from "../components/decor"
import { Layout } from "../components/layout"

const ContactPage = props => {
  const {
    contactUsTitle,
    contactUsSubtitle,
    contactUsAddress,
    contactUsPhone,
    contactUsEmail,
    joinUsTitle,
    joinUsSubtitle,
    joinUsPhone,
    joinUsEmail,
    ...restProps
  } = props.pageContext
  return (
    <Layout {...restProps}>
      <section id="contact-us" className={`${style.contactUs} bg-a`}>
        <DecorStyle1Left />
        <DecorStyle1Right />
        <h1 className="container mx-auto h1 icon triangle">
          {restProps.pageTitle}
        </h1>
        <div className="container container--mobile mx-auto">
          <h2 className="h1 text-theme-yellow">{contactUsTitle}</h2>
          <h3 className="h3">{contactUsSubtitle}</h3>
          <ul className={`${style.iconList} icon-list`}>
            <li className="icon map">{contactUsAddress}</li>
            <li className="icon phone">{contactUsPhone}</li>
            <li className="icon mail">
              <a href={`mailto:${contactUsEmail}`}>{contactUsEmail}</a>
            </li>
          </ul>
        </div>
      </section>
      <section id="join-us" className={`${style.joinUs} bg-c`}>
        <DecorStyle2 direction="left" />
        <DecorStyle2 direction="right" />
        <div className="container container--mobile mx-auto">
          <h2 className="h1 text-theme-yellow">{joinUsTitle}</h2>
          <h3>{joinUsSubtitle}</h3>
          <ul className={`${style.iconList} icon-list`}>
            <li className="icon phone">{joinUsPhone}</li>
            <li className="icon mail">
              <a href={`mailto:${joinUsEmail}`}>{joinUsEmail}</a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
