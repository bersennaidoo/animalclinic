import * as React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <b>Home</b>
      </Link> &nbsp;
      <Link to="/services">
        <b>Services</b>
      </Link> &nbsp;
      <Link to="/ask-the-vet">
        <b>Ask the Vet</b>
      </Link> &nbsp;
      <Link to="/contact">
        <b>Contact</b>
      </Link>
    </nav>
  )
}

export default Nav
