import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// components

import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'


// pages

import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Register from './pages/Register/Register.jsx'
import Login from './pages/Login/Login.jsx'

function App() {

  return (
    <div className='App'>
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
    </div>
  )

}

export default App

// Contexto da autenticação
