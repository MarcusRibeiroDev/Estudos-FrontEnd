import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// CSS
import './App.css';

//Pages
import About from './pages/About/About';
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="App">
      <h1>MiniBlog</h1>
      <BrowserRouter>
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
