import React from "react"

import Layout from "../components/layout"

const ContactPage = (props) => {
  const {
    language,
    pagePath,
  } = props.pageContext
  return (
    <Layout
      language={language}
      pagePath={pagePath}
    >
      <h1>Contact [{language}]</h1>
    </Layout>
  )
}

export default ContactPage
