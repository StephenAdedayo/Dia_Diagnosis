import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Addblogs = () => {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)


  return (
    <>
      <main >

      {/* upload image */}
      <form >
        <div>
          <p className='mb-5'>Upload Image</p>

          <div className='flex gap-5'>
            <label className='' htmlFor="image1">
              <img className='w-30' src={!image1 ? assets.upload_area : URL.createObjectURL(image1) } alt="" />
              <input type="file" hidden id='image1' onChange={(e) => setImage1(e.target.files[0])} />
              <p className='mt-2'>Blog image 1</p>
            </label>

              <label className='' htmlFor="image2">
              <img className='w-30' src={!image2 ? assets.upload_area : URL.createObjectURL(image2) } alt="" />
              <input type="file" hidden id='image2' onChange={(e) => setImage2(e.target.files[0])} />
              <p className='mt-2'>Blog image 2</p>
            </label>


              <label className='' htmlFor="image3">
              <img className='w-30' src={!image3 ? assets.upload_area : URL.createObjectURL(image3) } alt="" />
              <input type="file" hidden id='image3' onChange={(e) => setImage3(e.target.files[0])} />
              <p className='mt-2'>Author Image 1</p>
            </label>

              <label className='' htmlFor="image1">
              <img className='w-30' src={!image4 ? assets.upload_area : URL.createObjectURL(image4) } alt="" />
              <input type="file" hidden id='image4' onChange={(e) => setImage4(e.target.files[0])} />
              <p className='mt-2'>Author Image 2</p>
            </label>
          </div>
        </div>


        <div className='flex flex-col gap-2 mt-10'>
          <p>Blog Title</p>
          <input type="text" placeholder='Enter title here' className='outline-none border px-2 py-3 border-gray-300 max-w-[500px] rounded-md w-full'/>
        </div>

          <div className='flex flex-col gap-2 mt-10'>
          <p>Blog Content</p>
          <textarea type="text" placeholder='Enter content here' className='outline-none border px-2 py-3 border-gray-300 max-w-[500px] rounded-md w-full' rows={5} cols={5}> </textarea>
        </div>

          <div className='flex flex-col gap-2 mt-10'>
          <p>Author's name</p>
          <input type="text" placeholder='Enter author"s name' className='outline-none border px-2 py-3 border-gray-300 max-w-[500px] rounded-md w-full'/>
        </div>

        <div className='flex flex-col gap-2 mt-10'>
          <p>Category</p>
          <select name="" id="" className='w-full outline-none border px-2 py-3 border-gray-300 max-w-[500px] rounded-md'>
            <option value="" disabled>Category</option>
            <option value="type1 diabetes">Type 1</option>
            <option value="type2 diabetes">Type 2</option>
          </select>
        </div>

          <div className='flex flex-col gap-2 mt-10'>
          <p>Blog Summary</p>
          <textarea type="text" placeholder='Enter summary here' className='outline-none border px-2 py-3 border-gray-300 max-w-[500px] rounded-md w-full' rows={5} cols={5}> </textarea>
        </div>

        <div className='flex items-center gap-2 mt-10'>
            <input type="checkbox" id='published' className='w-[30px]'/>
          <label htmlFor="published">
            Published
          </label>
        </div>
      
      <button type='submit' className='uppercase text-sm bg-gray-500  text-white mt-5 px-6 py-3'>Add blog</button>
     </form>

      </main>
    </>
  )
}

export default Addblogs
