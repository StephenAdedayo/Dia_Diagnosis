import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Blog from './pages/Blog'
import SingleBlog from './pages/SingleBlog'
import HealthTips from './pages/HealthTips'
import Diagnosis from './pages/Diagnosis'

const App = () => {
  return (
    <>
      <Navbar />
      <main className='min-h-screen px-5 lg:px-40'>
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/about'  element={<About />}/>
        <Route path='/services'  element={<Services />}/>
        <Route path='/login'  element={<Login />}/>
        <Route path='/signup'  element={<SignUp />}/>
        <Route path='/blogs'  element={<Blog />}/>
        <Route path='/singleblog/:id'  element={<SingleBlog />}/>
        <Route path='/healthtips'  element={<HealthTips />}/>
        <Route path='/diagnosis'  element={<Diagnosis />}/>
      </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
