import { useEffect, useState } from "react"


export const useFetch = (url)=>{
    const [data, setData] = useState(null)

    // 3 - Refatorando o POST

    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    // 4 - Loading

    const [loading, setLoading] = useState(false)

    // 5 - Erro

    const [error, setError] = useState(null)

    // 6 - Delete

    const [id, setId] = useState(null)

    const httpConfig = (newData, method, id = null)=>{

        setMethod(method)

        if(method === 'POST'){
            setConfig({
                method,
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(newData)
            })
        }

        if(method === 'DELETE'){
            setId(id)
            setConfig({
                method,
                headers: {
                    "Content-Type" : "application/json"
                },
            })
        }

    }

    useEffect(()=>{

        async function fetchList(){
            setLoading(true)

            try{
                const res = await fetch(url)
                const dataJson = await res.json()
      
                setData(dataJson)
            } catch(error){
                console.log(error.message)
                setError('Houve um erro no sistema')
            }

            setLoading(false)
        }
      
        fetchList()
    }, [url, callFetch])

    // 5

    useEffect(()=>{
        if(method === 'POST'){
            const fetchConfig = async ()=>{
                let options = [url, config]
    
                const res = await fetch(...options)
    
                const json = await res.json()
                
                setCallFetch(json)
            }
    
            fetchConfig()
        }

        else if(method === 'DELETE'){
            const fetchConfig = async ()=>{
                let options = [`${url}/${id}`, config]
    
                const res = await fetch(...options)
    
                const json = await res.json()
                
                setCallFetch(json)
            }
            fetchConfig()
        }

    }, [config, url, method, id])

    return { data, httpConfig, loading, error }
}