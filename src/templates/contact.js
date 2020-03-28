import React from "react"

import Layout from "../components/layout"

const ContactPage = (props) => {
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
      <section>
        <h1>{restProps.pageTitle}</h1>
        <h2>{contactUsTitle}</h2>
        <h3>{contactUsSubtitle}</h3>
        <ul>
          <li><address>{contactUsAddress}</address></li>
          <li><span>{contactUsPhone}</span></li>
          <li><a href={`mailto:${contactUsEmail}`}>{contactUsEmail}</a></li>
        </ul>
      </section>
      <section>
        <h2>{joinUsTitle}</h2>
        <h3>{joinUsSubtitle}</h3>
        <ul>
          <li><span>{joinUsPhone}</span></li>
          <li><a href={`mailto:${joinUsEmail}`}>{joinUsEmail}</a></li>
        </ul>
      </section>
    </Layout>
  )
}

export default ContactPage
