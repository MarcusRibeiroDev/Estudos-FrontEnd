// CSS
import styles from './About.module.css'
import { Link } from 'react-router-dom'

//import { useAuthContext } from '../../context/AuthContext'

const About = () => {

  //const {context} = useAuthContext()

  //console.log(context)

  return (
    <div className={styles.about}>
        <h1>About</h1>

        <p>Esse MiniBlog serve para você colocar suas publicações mais importantes.</p>

        <Link className='btn' to='/posts/create'>Crie seu pimeiro post!</Link>
    </div>
  )
}

export default About