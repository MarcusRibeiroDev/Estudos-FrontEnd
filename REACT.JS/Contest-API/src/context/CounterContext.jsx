/* eslint-disable react/prop-types */
// parte 1 criar contexto

import { createContext, useState } from "react";

export const ConterContext = createContext()

// parte 2 provider

export const ConterContextProvider = ({children}) =>{
   const [counter, setCounter] = useState(5) 

   return (
    <ConterContext.Provider value={{counter, setCounter}}>
        {children}
    </ConterContext.Provider>
   )
}