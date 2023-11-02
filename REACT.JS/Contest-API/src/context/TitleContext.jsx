import { createContext, useReducer } from "react";

export const TitleContext = createContext()

const TitleColorReducer = (state, action)=>{
    switch(action.type){
        case "GRAY":
            return {...state, color: "gray"}
        case "YELLOW":
            return {...state, color: "yellow"}
        default: 
            return state
    }
}

export const TitleContextProvider = ({children}) =>{
   const [state, dispatch] = useReducer(TitleColorReducer, {color: "red", fontSize: '32px'}) 

   return (
    <TitleContext.Provider value={{state, dispatch}}>
        {children}
    </TitleContext.Provider>
   )
}