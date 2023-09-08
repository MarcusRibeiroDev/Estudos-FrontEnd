import './App.css'
import CreateForms from './components/CreateForms'

function App() {

  return (
    <>
      {/*Criando Forms*/}
      <h1>Form</h1>
      <CreateForms user={{name: "Marcus", email: "marcus.me.95@gmail.com", tel:1195656559, cupom: 5656599}}/>
    </>
  )
}

export default App
