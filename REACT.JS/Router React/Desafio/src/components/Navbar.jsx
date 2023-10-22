import { NavLink } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      
      {/* <Link to='/'>Home</Link>
      <Link to='/About'>About</Link> */}

      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>

    </nav>
  )
}

export default Navbar