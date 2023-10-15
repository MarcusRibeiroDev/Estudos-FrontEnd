import './App.css'
import { useState } from 'react'
import {useFetch} from '../hooks/useFetch.jsx'

function App() {

  const url = 'http://localhost:3000/produtos' // Url da API

  //const [list, setList] = useState([]) // Lista de produtos

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [idDelete, setIdDelete] = useState('')

  // 1 - Resgatando Dados
  // useEffect(()=>{
  //   async function fetchList(){
  //     const res = await fetch(url)
  //     const data = await res.json()

  //     setList(data)
  //   }

  //   fetchList()
  // }, [])

  // 2 - Resgatando Dados com Hooks Personalizados

  const {data:items, httpConfig, loading, error} = useFetch(url)

  const handleSubmit = async (e)=>{
    e.preventDefault()

    const newProduct = {
      name,
      price,
    }

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type" : "application/json"
    //   },
    //   body: JSON.stringify(newProduct)
    // })

    httpConfig(newProduct, 'POST')

    //const updatedList = await res.json()

    //setList((listPreview) => [...listPreview, updatedList])

    setName('')
    setPrice('')
  }

  return (
    <>
      <div className='app'>
        <h1>Lista de produtos</h1>
        {loading && <h2>Carregando...</h2>}
        
        {error && <p>{error}</p>}

        {!error && 
          <ul>
          {items && items.map((p)=>(
            <li key={p.id}>ID {p.id} - {p.name} = R$ {p.price}</li>
          ))}
         </ul>
        }

        <hr />

        {!loading && 
          <div>
            <h2>Criar produto</h2>
            <form onSubmit={handleSubmit}>
              <div className='create-product'>
                <label>
                  Nome:
                  <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)}/>
                </label>
    
                <label>
                  Preço:
                  <input type="text" name="price" value={price} onChange={(e)=> setPrice(e.target.value)}/>
                </label>
    
                <button type='submit'>Enviar</button>
              </div>
            </form>
            <h2>Deletar produto</h2>
            <div className='delete-product'> 
              <label>
                ID:
              <input type="text" value={idDelete} placeholder='Digite o ID do elemento a ser deletado' onChange={(e)=> setIdDelete(e.target.value)}/>
              </label>
              <button type='submit' onClick={()=>{httpConfig(null, 'DELETE', idDelete)}}>Deletar</button>
            </div>
          </div>
        }

      </div>
    </>
  )
}

export default App
