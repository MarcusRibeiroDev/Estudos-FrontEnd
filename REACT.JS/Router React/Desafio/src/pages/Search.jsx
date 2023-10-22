import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {

  const [searchParams] = useSearchParams()

  const url = `http://localhost:3000/produtos/?${searchParams}`

  const {data:items, error} = useFetch(url)

  return (
    <div>

      <h1>Products</h1>

      {error && <h1>{error}</h1>}

      {!error &&               

        <ul className='ul-home'>
            {
              items && items.map((item)=>(
                <li key={item.id}>
                    <h1>{item.name}</h1>
                    <p>{item.price}</p>
                    <Link to={`/products/${item.id}`} >Detalhes</Link>
                </li>
              ))
            }
        </ul>
      }

    </div>
  )
}

export default Search