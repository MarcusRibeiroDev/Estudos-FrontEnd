// CSS
import './App.css'

// IMAGENS
import Tropical from './assets/praia-tropical.jpg'

//
import ManageData from './components/ManageData'
import List from './components/List'
import ConditionalSimple from './components/ConditionalSimple'
import Props from './components/Props'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'

function App() {

  const people = [
    {userName: "Marcus", userAge: 15, userGrade: 6},
    {userName: "Carlos", userAge: 15, userGrade: 3},
    {userName: "Sabrina", userAge: 19, userGrade: 8},
    {userName: "Orácio", userAge: 40, userGrade: 7},
    {userName: "Amanda", userAge: 34, userGrade: 9},
  ]

  const showContentConsole = ()=>{
    console.log("Obrigado pelo Like")
  }

  return (

    <>

      <h1>Avançando em React</h1>

      <div>
        {/*Imagens Public*/}
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      <div>
        {/*Imagens Assets*/}
        <img src={Tropical} alt="Paisagem 2" />
      </div>
      <hr />
      <ManageData />
      <hr />
      <List />
      <hr />
      <ConditionalSimple />
      <hr />
      <Props userName={"Marcus"} userAge={18} userGrade={9} id={1}/>
      <Props userName={"Eduardo"} userAge={16} userGrade={6} id={2}/>
      <Props userName={"Carlos"} userAge={20} userGrade={8} id={3}/>
      <hr />
      {/*Loop*/}
      {people.map((person)=>(
        <Props key={person.id} userName={person.userName} userAge={person.userAge} userGrade={person.userGrade}/>
      ))}
      <hr />
      {/*Container*/}
      <Container stringSet={"Atributo"}>
        <p>Elemento Children 1</p>
      </Container>
      {/*Function*/}
      <h2>Clique no like se gostou!</h2>
      <ExecuteFunction functionComponent={showContentConsole}/>
    </>
  )

}

export default App
