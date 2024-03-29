// import { useContext } from "react"
// import { ConterContext } from "../context/CounterContext"

import { useCounterContext } from "../hooks/useCounterContext"

const About = () => {

  const { counter, setCounter } = useCounterContext()

  return (
    <>
      <div>About</div>
      <p>Contador: {counter}</p>

      <button onClick={()=>{setCounter(counter + 1)}} >Add + 1</button>
    </>
  )
}

export default About