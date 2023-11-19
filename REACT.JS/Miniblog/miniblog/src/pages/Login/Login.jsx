import style from './Login.module.css'
import { useEffect, useState } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    // Import Hook useAuthentication

    const {login, error: authError, loading,} = useAuthentication()

    const handleSubmit = async (e)=>{
        e.preventDefault()

        setError('')

        const userSystem = {
            email,
            password,
        }

        const res = await login(userSystem)
    }

    useEffect(()=>{
        setError(authError)
    }, [authError])

  return (
    <div className={style.login}>
        <h2>Entre na sua conta.</h2>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Email:</span>
                <input type="email" name="email" required placeholder='E-mail de usuário' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </label>
            <label>
                <span>Senha:</span>
                <input type="password" name="password" required placeholder='Senha de usuário' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </label>
            {loading && <button className='btn' disabled>Aguarde...</button>}
            {!loading && <button className='btn'>Login</button>}
        </form>
        {error && <p className='error'>{error}</p>}
    </div>
  )
}

export default Login