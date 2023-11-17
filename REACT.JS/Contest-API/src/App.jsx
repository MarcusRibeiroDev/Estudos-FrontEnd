import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import About from './pages/About.jsx'
import Profile from './pages/Profile.jsx'
import Contact from './pages/Contact.jsx'

import { ConterContextProvider } from './context/CounterContext'
import { TitleContextProvider } from './context/TitleContext'

// context
import { useAuthContext } from './context/AuthContext.js'

function App() {

  return (
    <div className='app'>

        <TitleContextProvider>
          <ConterContextProvider>
            <BrowserRouter>

              <NavBar />

              <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/profile' element={<Profile />} />
                  <Route path='/contact' element={<Contact />} />
              </Routes>

            </BrowserRouter>
          </ConterContextProvider>
        </TitleContextProvider>

    </div>
  )
}

export default App
