import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

//Components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

// CSS
import './App.css';

//Pages
import About from './pages/About/About';
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className='container'>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/about' element={<About />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
