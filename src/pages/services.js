import * as React from "react"
import Service from "../components/service/service"
import ExternalData from "../data/services.json"
import Seo from "../components/seo"
import Layout from "../components/layout"

const ServicesPage = () => {
  return (
    <Layout>
      <div>
        <Service data={ExternalData} />
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Animal Clinic Services" />

export default ServicesPage
