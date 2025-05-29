import React, { createContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


export const diaContext = createContext()

const DiaContextProvider = ({children}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

    const value = {
           navigate,
           location,
           isMenuOpen,
           setIsMenuOpen
    }

  return (
    <diaContext.Provider value={value}>
      {children}
    </diaContext.Provider>
  )
}

export default DiaContextProvider
