import React from "react"

import Layout from "../components/layout"

const HomePage = (props) => {
  const {
    language,
    pagePath,
  } = props.pageContext
  return (
    <Layout
      language={language}
      pagePath={pagePath}
    >
      <h1>Home [{language}]</h1>
    </Layout>
  )
}

export default HomePage
