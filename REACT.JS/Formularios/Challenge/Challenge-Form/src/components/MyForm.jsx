import './MyForm.css'

import { useState } from 'react'
import PropTypes from "prop-types";

const MyForm = ({user}) => {

    const [name, setName] = useState(user.name ? user.name : "")
    const [cpf, setCpf] = useState(user.cpf ? user.cpf : "")
    const [email, setEmail] = useState(user.email ? user.email : "")
    const [tel, setTel] = useState(user.tel ? user.tel : "")
    const [description, setDescription] = useState(user.description ? user.description : "")
    const [office, setOffice] = useState(user.office ? user.office : "")

    const handleSubmit = (e)=>{
        e.preventDefault()

        console.log(
        `
        **Dados do Formulário**

        Nome: ${name}

        CPF: ${cpf}

        Email: ${email}

        Telefone: ${tel}

        Descrição: ${description}

        Setor: ${office}
        `
        )

        setName("")
        setCpf("")
        setEmail("")
        setTel("")
        setDescription("")
        setOffice("")
    }

  return (
    <div className="container-form-MyForm">
        <form className="form-MyForm" onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input type="text" name='name-input' onChange={(e)=> setName(e.target.value)} value={name} />
            </label>
            <label>
                <span>CPF:</span>
                <input type="number" name='cpf-input' onChange={(e)=> setCpf(e.target.value)} value={cpf} />
            </label>
            <label>
                <span>Email:</span>
                <input type="text" name='email-input' onChange={(e)=> setEmail(e.target.value)} value={email} />
            </label>
            <label>
                <span>Telefone:</span>
                <input type="tel" name='tel-input' onChange={(e)=> setTel(e.target.value)} value={tel} />
            </label>
            <label>
                <span>Descrição:</span>
                <textarea name="description-input" onChange={(e)=> setDescription(e.target.value)} value={description}></textarea>
            </label>
            <label>
                <span>Setor:</span>
                <select name="office-input" onChange={(e)=> setOffice(e.target.value)} value={office}>
                    <option value="Produção">Produção</option>
                    <option value="Cozinha">Cozinha</option>
                    <option value="Administrativo">Administrativo</option>
                    <option value="Limpeza">Limpeza</option>
                </select>
            </label>
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default MyForm

MyForm.propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      cpf: PropTypes.number,
      email: PropTypes.string,
      tel: PropTypes.number,
      description: PropTypes.string,
        office: PropTypes.string,
    }).isRequired,
  };