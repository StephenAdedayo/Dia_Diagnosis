import React, { createContext, useState } from 'react'


export const Admincontext = createContext()
const yeah = 'stephen'

const AdmincontextProvider = ({children}) => {

  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

    const value = {
        yeah,
        isSideBarOpen,setIsSideBarOpen,
        isMenuOpen, setIsMenuOpen
    }

  return (
    <Admincontext.Provider value={value}>
      {children}
    </Admincontext.Provider>
  )
}

export default AdmincontextProvider
