import * as React from "react"
import { Link } from "gatsby"

const AskVet = ({ data }) => {
  return (
    <>
      <h2>{data.h2}</h2>
      <p>
        <Link to="/contact">Contact us</Link>&nbsp; if you have a question that you
        would like answered here.
      </p>
      <dl>
        {data.lst.map((obj, i) => (
          <>
            <dt key={i}>{obj.dt}</dt>
            <dd key={i}>{obj.dd}</dd>
          </>
        ))}
      </dl>
    </>
  )
}

export default AskVet
