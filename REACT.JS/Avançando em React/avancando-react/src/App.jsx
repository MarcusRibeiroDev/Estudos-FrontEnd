// CSS
import './App.css'

// IMAGENS
import Tropical from './assets/praia-tropical.jpg'

//
import ManageData from './components/ManageData'
import List from './components/List'

function App() {

  return (
    <div>

      <h1>Avançando em React</h1>

      <div>
        {/*Imagens Public*/}
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      <div>
        {/*Imagens Assets*/}
        <img src={Tropical} alt="Paisagem 2" />
      </div>

      <ManageData />

      <List />

    </div>
  )

}

export default App
