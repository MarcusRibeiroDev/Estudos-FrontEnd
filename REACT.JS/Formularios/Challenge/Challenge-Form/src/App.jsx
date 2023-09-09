import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
      <MyForm user={{
        name: "Marcus Eduardo",
        cpf: 50518202808,
        email: "marcus.me.75@gmail.com",
        tel: 11978555003,
        description: "Preciso de ajuda com meu PC",
        office: "Administrativo"
      }}/>
    </>
  )

}

export default App
