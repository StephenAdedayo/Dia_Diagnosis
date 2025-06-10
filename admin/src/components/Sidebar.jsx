import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { Admincontext } from '../context/Admincontext'


const Sidebar = () => {

    const {isSideBarOpen, setIsSideBarOpen} = useContext(Admincontext)

    const links = [{tag: "Overview", href:"/", img: assets.vector1}, {tag : "Add Blog", href:"/addblogs", img:assets.Notebook}, {tag : "Blogs", href:"allblogs", img:assets.Notebook}, {tag: "Users", href: "allusers", img:assets.vector2}]

  return (
    <div className='mt-4 sticky top-5'>
        <img onClick={() => setIsSideBarOpen(!isSideBarOpen)} src={assets.logo} alt="" className='w-[100px] mb-10'/>

        <div className='w-full '>
           {links.map((link, index) => {

            return (
                <NavLink className={'w-full mb-8 flex rounded-lg p-2.5 items-center gap-5 '} key={index} to={link.href} >
                    <div className='size-8 bg-white rounded-full  items-center flex justify-center'>
                    <img className='w-[14px]' src={link.img} alt="" />
                    </div>
                    {isSideBarOpen && <p className='uppercase text-sm'>{link.tag}</p>}
                    
                </NavLink>
            )
           })}
        </div>
    </div>
  )
}

export default Sidebar
