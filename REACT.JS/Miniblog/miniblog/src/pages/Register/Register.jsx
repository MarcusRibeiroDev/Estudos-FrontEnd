import style from './Register.module.css'

const Register = () => {
  return (
    <div className={style.register}>
        <h2>Cadastre-se em nosso blog!</h2>
        <p>Venha conosco e compartilhe suas histórias!</p>
        <form className={style.form}>
            <label>
                <span>Nome:</span>
                <input type="text" name="name" required placeholder='Nome de usuário'/>
            </label>
            <label>
                <span>Email:</span>
                <input type="email" name="email" required placeholder='E-mail de usuário'/>
            </label>
            <label>
                <span>Senha:</span>
                <input type="password" name="password" required placeholder='Senha de usuário'/>
            </label>
            <label>
                <span>Confirme a senha:</span>
                <input type="password" name="confirmPassword" required placeholder='Confirme sua senha'/>
            </label>
            <button className='btn'>Cadastrar</button>
        </form>
    </div>
  )
}

export default Register