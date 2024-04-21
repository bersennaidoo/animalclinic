import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Nav from "./nav/nav"
import Footer from "./footer/footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      <main>{children}</main>
      <br></br>
      <Footer />
    </>
  )
}

export default Layout
