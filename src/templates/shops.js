import React from "react"

import Layout from "../components/layout"

const ShopsPage = (props) => {
  const {
    language,
    pagePath,
  } = props.pageContext
  return (
    <Layout
      language={language}
      pagePath={pagePath}
    >
      <h1>Shops [{language}]</h1>
    </Layout>
  )
}

export default ShopsPage
