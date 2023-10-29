import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
        <nav>
            <h1>Context API</h1>
            <ul>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/profile'>Profile</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar