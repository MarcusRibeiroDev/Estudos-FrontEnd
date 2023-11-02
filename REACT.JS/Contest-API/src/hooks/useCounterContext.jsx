import { useContext } from "react"
import { ConterContext } from "../context/CounterContext"

export const useCounterContext = ()=>{

    const context = useContext(ConterContext)

    if(!context){
        console.log("Context não existe")
    }

    return context
}

