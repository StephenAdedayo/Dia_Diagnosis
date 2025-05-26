import React, { createContext } from 'react'


export const diaContext = createContext()

const DiaContextProvider = ({children}) => {

    const value = {
           
    }

  return (
    <diaContext.Provider value={value}>
      {children}
    </diaContext.Provider>
  )
}

export default DiaContextProvider
