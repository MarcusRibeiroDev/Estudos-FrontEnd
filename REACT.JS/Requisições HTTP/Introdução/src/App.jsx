import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const url = 'http://localhost:3000/produtos' // Url da API

  const [list, setList] = useState([]) // Lista de produtos


  // 1 - Resgatando Dados
  useEffect(()=>{
    async function fetchList(){
      const res = await fetch(url)
      const data = await res.json()

      setList(data)
    }

    fetchList()
  })

  return (
    <>
      <h1>Lista de produtos</h1>

      <ul>
        {list.map((p)=>(
          <li key={p.id}>{p.nome} - R$ {p.preco}</li>
        ))}
      </ul>
    </>
  )
}

export default App
