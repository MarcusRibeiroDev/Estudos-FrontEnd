import { useState } from "react"

const SetPlusNumber = () => {

    let [n, setN] = useState(0)

    setInterval(()=>{
        setN(++n)
    }, 2000)
    

  return (
    <div>
        <h1 style={n % 2 ? ({color: "yellow", transition: "color 0.5s"}) : ({color: "orange", transition: "color 0.5s"})}>IF CSS</h1>
        <p style={n % 2 ? ({color: "yellow", transition: "color 0.5s"}) : ({color: "orange", transition: "color 0.5s"})}>IF CSS</p>
    </div>
  )
}

export default SetPlusNumber