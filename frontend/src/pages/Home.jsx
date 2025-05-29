import React, { useContext } from 'react'
import { diaContext } from '../context/DiaContext'
import Start from '../components/Start'
import Mlmedicine from '../components/Mlmedicine'
import WhatAppDoes from '../components/WhatAppDoes'
// import bg from '../assets/bg1.png'

const Home = () => {


  return (
   <>
   <Start />
   <Mlmedicine />
   <WhatAppDoes />
   </>
  )
}

export default Home
