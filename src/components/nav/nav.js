import * as React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        Home
      </Link> &nbsp;
      <Link to="/services">
        Services
      </Link> &nbsp;
      <Link to="/askvet">
        Ask the Vet
      </Link> &nbsp;
      <Link to="/contact">
        Contact
      </Link>
    </nav>
  )
}

export default Nav
