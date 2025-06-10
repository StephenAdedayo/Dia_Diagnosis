import React, { useContext } from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Allblogs from './pages/Allblogs'
import Allusers from './pages/Allusers'
import Addblogs from './pages/Addblogs'
import Sidebar from './components/Sidebar'
import { Admincontext } from './context/Admincontext'
import Navbar from './components/Navbar'

const App = () => {

      const {isSideBarOpen, setIsSideBarOpen} = useContext(Admincontext)
  

  return (
    <>
    <main className='bg-gray-100  min-h-screen flex gap-10 md:px-10 px-5 py-8 '>
      
      <div className={`${isSideBarOpen ? "flex-[15%] w-full" : "flex-[5%] w-0"}  lg:block hidden  transition-all duration-500 delay-75 ease-in-out `}>
         <Sidebar />
      </div>

      {/* <div> */}

     <div className={`${isSideBarOpen ? "flex-[85%] " : "flex-[100%]"} `}>
      <Navbar />

     <Routes>
    
    <Route path='/' index={true} element={<Dashboard />}/>
    <Route path='/allblogs' element={<Allblogs />}/>
    <Route path='/allusers' element={<Allusers />}/>
    <Route path='/addblogs' element={<Addblogs />}/>

     </Routes>
          </div>
      {/* </div> */}

      </main>

    </>
  )
}

export default App
