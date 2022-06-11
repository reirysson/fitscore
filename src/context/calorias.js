import { useContext, createContext, useState } from 'react'

const CaloriasContext = createContext();

export const useCaloriasContext = () => {
    const context = useContext(CaloriasContext) 
  
    return context
}

export const CaloriasContextProvider = ({children}) =>{

const [metaCaloria, setMetaCaloria] = useState(2000)   
const [caloriaConsumida, setCaloriaConsumida] = useState(0)
const caloriasState = { 
  metaDiaria:{metaCaloria, setMetaCaloria}, 
  caloriaConsumida:{caloriaConsumida, setCaloriaConsumida}
}

    return (
      <CaloriasContext.Provider value={caloriasState}>
        {children}
      </CaloriasContext.Provider>
    )
}







