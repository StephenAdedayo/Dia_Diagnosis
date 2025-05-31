import React from 'react'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'
import blog4 from '../assets/blog4.png'
import blog5 from '../assets/blog5.png'
import blog6 from '../assets/blog6.png'
import blog7 from '../assets/blog7.png'
import blog8 from '../assets/blog8.png'
import blog9 from '../assets/blog9.png'
import BlogItem from './BlogItem'

const AllBlogs = () => {

    const allBlogs = [{title: "Insights into Modern Medicine Exploring the Latest Breakthroughs", image : blog1, time : Date.now(), desc: "Pricing"}, {title: "Wellness Writings: Navigating Health in Today's World", image : blog2, time : Date.now(), desc: "Meeting"},  {title: "Health Matters A Journey Through Medical Science", image : blog3, time : Date.now(), desc: "Updates"}, {title: "The Pulse Unraveling the Mysteries of Medicine", image : blog4, time : Date.now(), desc: "Pricing"}, {title: "Beyond the Diagnosis Stories of Healing and Hope", image : blog5, time : Date.now(), desc: "Pricing"},  {title: "Medical Marvels From Lab to Life", image : blog6, time : Date.now(), desc: "Meeting"}, 
        {title: "Healing Hands Embracing Holistic Health", image : blog7, time : Date.now(), desc: "Pricing"}, {title: "Medicine Unboxed Exploring the Frontiers of Healthcare", image : blog8, time : Date.now(), desc: "Meeting"}, {title: "Breaking Barriers Advancements in Medical Research", image : blog9, time : Date.now(), desc: "Updates"},
     ]

  return (
    <div className='my-20 px-5 lg:px-40 w-full '>
         
        <BlogItem  allBlogs={allBlogs}/>        

    </div>
  )
}

export default AllBlogs
