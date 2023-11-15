import { useState } from 'react'
import style from './Register.module.css'

const Register = () => {

    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()

        setError('')

        const userSystem = {
            displayName,
            email,
            password,
        }

        if(password !== passwordConfirm){
            setError('As senhas precisam ser iguais')
            return
        }

        console.log(userSystem)
    }

  return (
    <div className={style.register}>
        <h2>Cadastre-se em nosso blog!</h2>
        <p>Venha conosco e compartilhe suas histórias!</p>
        <form className={style.form} onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input type="text" name="name" required placeholder='Nome de usuário' value={displayName} onChange={(e)=>{setDisplayName(e.target.value)}}/>
            </label>
            <label>
                <span>Email:</span>
                <input type="email" name="email" required placeholder='E-mail de usuário' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </label>
            <label>
                <span>Senha:</span>
                <input type="password" name="password" required placeholder='Senha de usuário' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </label>
            <label>
                <span>Confirme a senha:</span>
                <input type="password" name="confirmPassword" required placeholder='Confirme sua senha' value={passwordConfirm} onChange={(e)=>{setPasswordConfirm(e.target.value)}}/>
            </label>
            <button className='btn'>Cadastrar</button>
        </form>
        {error && <p className='error'>{error}</p>}
    </div>
  )
}

export default Register