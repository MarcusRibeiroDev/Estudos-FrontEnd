import style from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

import { useAuthentication } from '../../hooks/useAuthentication'
import { useAuthContext } from '../../context/AuthContext'

const NavBar = () => {

    const { user } = useAuthContext()
    console.log(user)

  return (
    <nav className={style.navbar}>
        <NavLink to='/' className={style.brand}>
            <span>
                Mini<b>Blog</b>
            </span>
        </NavLink>
        <ul className={style.links_list}>
            <li>
                <NavLink className={({isActive})=>(isActive ? style.active : '')} to="/">
                    Home
                </NavLink>
            </li>
            {!user && (
                <>
                    <li>
                        <NavLink className={({isActive})=>(isActive ? style.active : '')} to='/login'>
                            Entrar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=>(isActive ? style.active : '')} to='/register'>
                            Cadastrar
                        </NavLink>
                    </li>
                </>
            )}
            {user && (
                <>
                    <li>
                        <NavLink className={({isActive})=>(isActive ? style.active : '')} to='/dashboard'>
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=>(isActive ? style.active : '')} to='/posts/create'>
                            Posts
                        </NavLink>
                    </li>
                </>
            )}
            <li>
                <NavLink className={({isActive})=>(isActive ? style.active : '')} to='/about'>
                    Sobre
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar