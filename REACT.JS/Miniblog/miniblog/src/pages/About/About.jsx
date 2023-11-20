// CSS
import styles from './About.module.css'
import { Link } from 'react-router-dom'

import { useAuthContext } from '../../context/AuthContext'

const About = () => {

  //const {context} = useAuthContext()

  //console.log(context)

  const { user } = useAuthContext()

  return (
    <div className={styles.about}>
        <h1>About</h1>

        <p>Esse MiniBlog serve para você colocar suas publicações mais importantes.</p>

        {user && (
          <>
            <Link className='btn' to='/posts/create'>Crie seu pimeiro post!</Link>
          </>
        )}

        {!user && (
          <>
          <h1>
            <Link className='btn' to='/register'>Se cadastre para compartilhar sua história</Link>
          </h1>
          </>
        )}
    </div>
  )
}

export default About