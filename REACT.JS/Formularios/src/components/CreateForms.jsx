import { useState } from "react"
import "./CreateForms.css"

const CreateForms = () => {

    const [telInput, setTelInput] = useState()

    const handleTelInput = (event)=>{
        setTelInput(event.target.value)
    }

  return (
    <div>
        <form>
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
            {/*Gerindo as informações*/}
            <label>
                <span>Telefone</span>
                <input type="tel" name="telefone" placeholder="Digite seu telefone..." onChange={handleTelInput} />
            </label>
            <input type="submit" value="Enviar" onClick={(e)=>{
                e.preventDefault()
                console.log("Telefone atual é "+telInput)}
            } />
        </form>
    </div>
  )
}

export default CreateForms