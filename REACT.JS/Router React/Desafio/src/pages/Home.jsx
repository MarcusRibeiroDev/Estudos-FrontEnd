import {useFetch} from '../hooks/useFetch.jsx'

import './Home.css'

const Home = ()=>{

    const url = 'http://localhost:3000/produtos'

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
                            </li>
                        ))
                    }
                </ul>
            }

        </div>
    )
    
}

export default Home