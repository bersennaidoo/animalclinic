import * as React from "react"

const Main = ({ data }) => {
  return (
    <>
      <h2>{data.h2}</h2>
      <p>{data.p}</p>
      <dl>
        {data.lst.map((obj, i) => (
          <>
            <dt key={i}>
              <strong>{obj.dt}</strong>
            </dt>
            <dd key={i}>{obj.dd}</dd>
          </>
        ))}
      </dl>
      <div>
        Animal Clinic <br></br>
        +27-031-5785803 <br></br>
        1104 Newlands west drive <br></br>
        Newlands west, DBN 4058
      </div>
    </>
  )
}

export default Main
