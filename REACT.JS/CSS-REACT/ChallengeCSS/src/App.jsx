import './App.css'
import CarDetails from './Components/carDetails'

function App() {

  const cars = [
    {model: "Palio", price: 25000, manufactureYear: 2016, color: "Preto", id: 56564},
    {model: "Celta", price: 20000, manufactureYear: 2012, color: "Vermelho", id: 66889},
    {model: "Corsa", price: 22000, manufactureYear: 2013, color: "Branco", id: 44555},
  ]

  return (
    <> 
      <h1>Showroom</h1>

      {cars.map((car)=>(
        <CarDetails key={car.id} carModel={car.model} price={car.price} manufactureYear={car.manufactureYear} color={car.color} />
      ))}
    </>
  )
}

export default App
