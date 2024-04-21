import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Main from "../components/main/main"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <div>
      <Main />
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Animal Clinic Services" />

export default IndexPage
