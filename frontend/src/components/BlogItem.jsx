import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ allBlogs }) => {

  const [blogData, setBlogData] = useState([])

  useEffect(() => {
    if(allBlogs.length > 0){
      const allBlog = allBlogs.filter(blog => blog.published)
       setBlogData(allBlog)
    }
  }, [allBlogs])

  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
      {blogData.map((blog, index) => (
        <Link key={index} to={`/singleblog/${blog._id}`}>
          <div className="space-y-5 w-full">
            <div className="overflow-hidden w-full">
              <img
                className="w-full flex-1 hover:scale-110 transition-all duration-500 delay-75 ease-in-out"
                src={blog.images[0]}
                alt=""
              />
            </div>

            <p className="text-[#102D47] lg:text-[22px] text-[16px] font-medium">
              {blog.title}
            </p>
            <p className="text-[#ACBCCA] text-[13px]">{`${new Date(
              blog.date
            ).toDateString()}`}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogItem;
