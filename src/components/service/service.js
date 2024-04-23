import * as React from "react"

const Service = ({ data }) => {
  return (
    <>
      <h2>{data.h2}</h2>
      <ul>
        {data.lst.map((obj, i) => (
          <li key={i}>
            <span className="category">{obj.title}</span>
            <br></br>
            {obj.define}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Service
