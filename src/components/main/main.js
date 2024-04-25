import * as React from "react"

const Main = ({ data }) => {
  return (
    <>
      <h2>{data.h2}</h2>
      <p>{data.p}</p>
        {data.lst.map((obj, i) => (
            <section>
            <h3 key={i}>{obj.dt}</h3>
            <p key={i}>{obj.dd}</p>
          </section>
        ))}
      <div className="address">
        Animal Clinic <br></br>
        +27-031-5785803 <br></br>
        1104 Newlands west drive <br></br>
        Newlands west, DBN 4058
      </div>
    </>
  )
}

export default Main
