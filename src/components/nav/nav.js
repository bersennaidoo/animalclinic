import * as React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <b>Home</b>
      </Link><br></br>
      <Link to="/services">
        <b>Services</b>
      </Link><br></br>
      <Link to="/ask-the-vet">
        <b>Ask the Vet</b>
      </Link><br></br>
      <Link to="/contact">
        <b>Contact</b>
      </Link><br></br>
    </nav>
  )
}

export default Nav
