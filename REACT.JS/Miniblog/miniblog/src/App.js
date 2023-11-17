import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

//Hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication.js';

//Components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

// CSS
import './App.css';

//Pages
import About from './pages/About/About';
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'

//Context
import { AuthProvider } from './context/AuthContext.js'

function App() {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      setUser(user)
    })
  }, [auth])

  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={user}>
        <BrowserRouter>
          <NavBar />
          <div className='container'>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/login' element={<Login />}/>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
