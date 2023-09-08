import { useState } from "react"
import "./CreateForms.css"

import PropTypes from "prop-types";

const CreateForms = ({user}) => {

    const [telInput, setTelInput] = useState(user.tel ? user.tel : "")

    const handleTelInput = (event)=>{
        setTelInput(event.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("Dados Enviados ao servidor")
        let inputs = document.querySelectorAll('input')
        Array.from(inputs).map((inp)=>(inp.value = ""))
    }

    const [cupomInput, setCupom] = useState(user.cupom ? user.cupom : "")

  return (
    <div>
        <form onSubmit={handleSubmit}>
            {/*Criando Form*/}
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome..." />
                <input type='submit' value="Enviar"/>
            </div>
            {/*Form envolto da tag Label*/}
            <label>
                <span>E-mail:</span>
                <input type="text" name="email" placeholder="Digite seu email..." />
            </label>
            <input type="submit" value="Enviar" />
            {/*Manipulando as informações*/}
            <label>
                <span>Telefone:</span>
                <input type="tel" name="telefone" placeholder="Digite seu telefone..." onChange={handleTelInput} value={user.tel} />
            </label>
            <input type="submit" value="Enviar" onClick={(e)=>{
                e.preventDefault()
                console.log("Telefone atual é "+telInput)}
            } />
            {/*Manipulando as informações INLINE*/}
            <label>
                <span>Cupom:</span>
                <input value={user.cupom} type="text" name="cupom" placeholder="Digite seu cupom..." onChange={(e)=>{setCupom(e.target.value); console.log(cupomInput)}} />
            </label>

        </form>
    </div>
  )
}

export default CreateForms

CreateForms.propTypes = {
    user: PropTypes.shape({
      tel: PropTypes.number,
      cupom: PropTypes.number,
    }).isRequired,
  };