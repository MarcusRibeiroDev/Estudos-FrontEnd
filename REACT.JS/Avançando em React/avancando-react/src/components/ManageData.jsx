import { useState } from "react"

const ManageData = () => {

  let [number, setNumber] = useState(1)

  return (
    <div>

      <div>Valor: {number}</div>

      <button onClick={()=>{
        setNumber(++number)
      }}>Aumentar valor</button>

      <button onClick={()=>{
        setNumber(--number)
      }}>Diminuir valor</button>

    </div>
  )
}

export default ManageData