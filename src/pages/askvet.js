import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AskVet from "../components/askvet/askvet"
import ExternalData from "../data/askvet.json"

const AskVetPage = () => (
  <Layout>
    <div>
      <AskVet data={ExternalData} />
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Animal Clinic Ask vet" />

export default AskVetPage
