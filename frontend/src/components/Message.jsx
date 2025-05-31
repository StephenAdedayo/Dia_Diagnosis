import React from 'react'
import message from '../assets/message.png'

const Message = () => {
  return (
    <div className='w-full px-5 lg:px-40 my-20 flex flex-col md:flex-row gap-20 items-center'>
        
        <div>

          <h1 className='text-[#102D47] lg:text-[40px] text-[25px] mb-10'>Send Us A message</h1>

          <form action="" className='space-y-5'>
           
           <div className='flex justify-between items-center gap-10'>

            <div className='w-full'>
            <label className='text-[#102D47] text-[17px]' htmlFor="">First name*</label> <br />
            <input type="text" name="" id="" placeholder='' className='outline-0 border px-2 py-3 w-full border-[#C0D5FB] rounded-md'/>
            </div>

            <div className='w-full'>
            <label className='text-[#102D47] text-[17px]' htmlFor="">Last name*</label> <br />
            <input type="text" name="" id="" placeholder='' className='outline-0 border px-2 py-3 w-full border-[#C0D5FB] rounded-md'/>
            </div>
       

           </div>

           <div className='flex justify-between items-center gap-10'>

             <div className='w-full'>
            <label className='text-[#102D47] text-[17px]' htmlFor="">Email*</label> <br />
            <input type="email" name="" id="" placeholder='' className='outline-0 border px-2 py-3 w-full border-[#C0D5FB] rounded-md'/>
            </div>

             <div className='w-full'>
            <label className='text-[#102D47] text-[17px]' htmlFor="">First name*</label> <br />
            <input type="text" name="" id="" placeholder='' className='outline-0 border px-2 py-3 w-full border-[#C0D5FB] rounded-md'/>
            </div>
           </div>

           <textarea name="" id="" className='w-full outline-0 border px-2 py-3  border-[#C0D5FB] rounded-md ' rows={5} placeholder='Message'></textarea>

           <button type='submit' className='w-fit bg-[#3187F4] px-6 py-3 text-white rounded-md'>Submit</button>

          </form>

        </div>
    
    <div>
        <img src={message} className='object-cover' alt="" />
    </div>


    </div>
  )
}

export default Message
