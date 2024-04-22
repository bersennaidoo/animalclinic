import * as React from "react"
import Service from "../components/service/service"
import ExternalData from "../data/services.json"
import Seo from "../components/seo"

const ServicesPage = () => {
  return (
    <div>
      <Service data={ExternalData} />
    </div>
  )
}

export const Head = () => <Seo title="Professional Services" />

export default ServicesPage
