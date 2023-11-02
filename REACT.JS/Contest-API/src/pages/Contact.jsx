// import { useContext } from "react"
// import { ConterContext } from "../context/CounterContext"

import { useCounterContext } from "../hooks/useCounterContext"
import { useTitleContext } from "../hooks/useTitleContext"

const Contact = () => {

  const { counter } = useCounterContext()
  const { state, dispatch } = useTitleContext()

  const setTitle  = (color)=>{
    dispatch({type: color})
  }

  return (
    <>
      <div style={state}>Contact</div>
      <p>Contador: {counter}</p>

      <button onClick={()=>setTitle('GRAY')}>Cinza</button>
      <button onClick={()=>setTitle('YELLOW')}>Amarelo</button>
    </>
  )
}

export default Contact