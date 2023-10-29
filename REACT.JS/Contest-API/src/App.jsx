import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import About from './pages/About.jsx'
import Profile from './pages/Profile.jsx'
import Contact from './pages/Contact.jsx'


function App() {

  return (
    <div className='app'>

        <BrowserRouter>

          <NavBar />

          <Routes>
              <Route path='/about' element={<About />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/contact' element={<Contact />} />
          </Routes>

        </BrowserRouter>

    </div>
  )
}

export default App
