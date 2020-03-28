import React from "react"

import Layout from "../components/layout"

const ContactPage = (props) => {
  const {
    language,
    pagePath,
    pageTitle,
    contactUsTitle,
    contactUsSubtitle,
    contactUsAddress,
    contactUsPhone,
    contactUsEmail,
    joinUsTitle,
    joinUsSubtitle,
    joinUsPhone,
    joinUsEmail,
  } = props.pageContext
  return (
    <Layout
      language={language}
      pagePath={pagePath}
    >
      <section>
        <h1>{pageTitle}</h1>
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
