import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useAuthentication } from './hooks/useAuthentication.js'

// components

import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'

// pages

import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Register from './pages/Register/Register.jsx'
import Login from './pages/Login/Login.jsx'

// context

import { AuthProvider } from './context/AuthContext.jsx'
import { useEffect, useState } from 'react'

function App() {

  const {auth} = useAuthentication()

  const [user, setUser] = useState(undefined)

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
    <div className='App'>
        <AuthProvider value={{user}}>
          <BrowserRouter>
            <Navbar />
            <div className='container'>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/login' element={<Login />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
    </div>
  )

}

export default App

// Contexto da autenticação
