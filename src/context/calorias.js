import { useContext, createContext, useState } from 'react'

const CaloriasContext = createContext();

export const useCaloriasContext = () => {
    const context = useContext(CaloriasContext) 
  
    return context
}

export const CaloriasContextProvider = ({children}) =>{
    
const [calorias, setCalorias] = useState(100)

    return (
      <CaloriasContext.Provider value={calorias}>
        {children}
      </CaloriasContext.Provider>
    )
}







