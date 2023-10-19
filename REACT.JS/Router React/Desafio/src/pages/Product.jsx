import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'
import './Product.css'

import { useFetch } from "../hooks/useFetch"

const Product = () => {

    const { id } = useParams()

    const url = `http://localhost:3000/produtos/${id}`

    const {data:produto, loading, error} = useFetch(url)

  return (
    <div className="product">
        {error && error}
        {loading && <p>Carregando...</p>}
        {produto && (
            <div className="product-container">
                <h1>{produto.name}</h1>
                <p>{produto.price}</p>
                <Link to={`/products/${id}/Info`} >Certificações</Link>
            </div>
        )}
    </div>
  )
}

export default Product