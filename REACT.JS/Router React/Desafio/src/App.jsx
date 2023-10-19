import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Routes

import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'


import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <div className='app'>
        <h1>React Router</h1>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products/:id' element={<Product />} />
            <Route path='/products/:id/info' element={<Info />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
