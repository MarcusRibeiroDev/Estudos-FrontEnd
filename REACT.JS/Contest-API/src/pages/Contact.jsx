import { useContext } from "react"
import { ConterContext } from "../context/CounterContext"

const Contact = () => {

  const { counter } = useContext(ConterContext)

  return (
    <>
      <div>Contact</div>
      <p>Contador: {counter}</p>
    </>
  )
}

export default Contact