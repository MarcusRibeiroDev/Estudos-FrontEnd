import styles from "./Register.module.css";

import { useEffect, useState } from "react";
import { useAuthentication } from '../../hooks/useAuthentication.js'

const Register = () => {

  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')


  //hook de criar usuário

  const {createUser, loading, error: authError, sucess} = useAuthentication()

  const handleSubmit =  async (e)=>{
    e.preventDefault()
    setError('')

    const user = {
      displayName,
      email,
      password
    }

    if(password !== confirmPassword){
      setError('As senhas precisam ser iguais')
      return
    }

    const res = await createUser(user)
  }

  useEffect(()=>{
    if(authError){
      setError(authError)
    }
  }, [authError])

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
            value={displayName}
            onChange={(e)=> setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira a senha"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme a senha"
            value={confirmPassword}
            onChange={(e)=> setConfirmPassword(e.target.value)}
          />
        </label>
        {!loading && <button className="btn" type="submit">Enviar</button>}
        {loading && <button className="btn" type="submit" disabled>Aguarde...</button>}
        {sucess && <p className="sucess">Usuário criado com sucesso</p>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;