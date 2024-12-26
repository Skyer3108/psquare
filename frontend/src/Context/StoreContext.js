import { createContext } from "react"

export const StoreContext=createContext(null) 
const StoreContextProvider=(props)=>{

    const url='http://localhost:5005'
    return(
        <StoreContext.Provider value={{url}}>
            {props.children}
        </StoreContext.Provider>
        
    )
}

export default StoreContextProvider