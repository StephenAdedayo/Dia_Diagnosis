import React from 'react'
import { assets } from '../assets/assets'

const Allusers = () => {
  return (
    <>
      <main className='bg-white rounded-lg p-5 w-full'>
        <div className='flex justify-between items-center mb-8'>
          <p>All Users</p>
          <img className='w-[30px]' src={assets.button2} alt="" />
        </div>

     <table border={1} className='w-full'>
      <thead className=''>
        <tr className=''>
          <td className=''>UserId</td>
          <td>Name</td>
          <td>Email</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>14563</td>
          <td>Stephen</td>
          <td>Ay@gmail.com</td>
          <td>X</td>
        </tr>
      </tbody>
     </table>

      </main> 
    </>
  )
}

export default Allusers
