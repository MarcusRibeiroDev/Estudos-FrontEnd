import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const url = 'http://localhost:3000/produtos' // Url da API

  const [list, setList] = useState([]) // Lista de produtos

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  // 1 - Resgatando Dados
  useEffect(()=>{
    async function fetchList(){
      const res = await fetch(url)
      const data = await res.json()

      setList(data)
    }

    fetchList()
  }, [])

  const handleSubmit = async (e)=>{
    e.preventDefault()

    const newProduct = {
      name,
      price,
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newProduct)
    })

    const updatedList = await res.json()

    console.log(updatedList)

    setList((listPreview) => [...listPreview, updatedList])

    setName('')
    setPrice('')
  }

  return (
    <>
      <div className='app'>
        <h1>Lista de produtos</h1>

        <ul>
          {list.map((p)=>(
            <li key={p.id}>{p.name} - R$ {p.price}</li>
          ))}
        </ul>

        <hr />

        <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)}/>
            </label>

            <label>
              Preço:
              <input type="text" name="price" value={price} onChange={(e)=> setPrice(e.target.value)}/>
            </label>

            <button type='submit'>Enviar</button>
        </form>
      </div>
    </>
  )
}

export default App
