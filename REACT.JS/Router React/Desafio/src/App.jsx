import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Routes

import Home from './pages/Home'
import About from './pages/About'

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
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
