import { createContext } from "react"

export const StoreContext=createContext(null) 
const StoreContextProvider=(props)=>{

    // const url='https://psqure-backed.onrender.com'
    const url='https://psqure-backed.onrender.com'
    return(
        <StoreContext.Provider value={{url}}>
            {props.children}
        </StoreContext.Provider>
        
    )
}

export default StoreContextProvider
