import style from './Footer.module.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={style.footer}>
        <h3>Escreva sobre o que te interessa!</h3>
        <p><b>MiniBlog</b> &copy; 2023</p>
    </footer>
  )
}

export default Footer