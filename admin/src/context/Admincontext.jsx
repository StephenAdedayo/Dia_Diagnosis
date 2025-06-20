import React, { createContext, useState } from 'react'
import {useNavigate} from 'react-router-dom'


export const Admincontext = createContext()

const AdmincontextProvider = ({children}) => {

const [isSideBarOpen, setIsSideBarOpen] = useState(true)
const [isMenuOpen, setIsMenuOpen] = useState(false)
const backendUrl = 'http://localhost:8000'
const navigate = useNavigate()
 



    const value = {
        isSideBarOpen,setIsSideBarOpen,
        isMenuOpen, setIsMenuOpen, backendUrl, navigate
    }

  return (
    <Admincontext.Provider value={value}>
      {children}
    </Admincontext.Provider>
  )
}

export default AdmincontextProvider
