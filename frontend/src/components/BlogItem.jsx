import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ allBlogs }) => {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
      {allBlogs.map((blog, index) => (
        <Link key={index} to={`/singleblog/${blog._id}`}>
          <div className="space-y-5 w-full">
            <div className="overflow-hidden">
              <img
                className="w-full hover:scale-110 transition-all duration-500 delay-75 ease-in-out"
                src={blog.image}
                alt=""
              />
            </div>

            <p className="text-[#102D47] lg:text-[22px] text-[16px] font-medium">
              {blog.title}
            </p>
            <p className="text-[#ACBCCA] text-[13px]">{`${new Date(
              blog.time
            ).getMinutes()} minutes ago`}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogItem;
