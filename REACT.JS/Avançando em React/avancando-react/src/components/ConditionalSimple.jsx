import { useState } from "react"

const ConditionalSimple = () => {

    const [x] = useState(true)

    let [age, setAge] = useState(17)

    const changeAge = ()=>{
        let newAge = parseInt(prompt("Qual sua idade?"))
        setAge(newAge)
    }

  return (
    <div>
        <h2>Isso será exibido?</h2>
        {x && <div>X é true</div>} 
        {!x && <div>X é false</div>}{/*Significa "se isso for vdd... então"*/}

        <h2>If ternário</h2>

        {age >= 18 ? (
            <div>
                <p>Você é de maior</p>
            </div>
        ) : (
            <div>
                <p>Você é de menor</p>
            </div>
        )}

        <button onClick={changeAge}>Colocar</button>

    </div>
  )
}

export default ConditionalSimple