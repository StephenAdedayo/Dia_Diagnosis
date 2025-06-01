import React, { useContext } from "react";

import BlogItem from "./BlogItem";
import { diaContext } from "../context/DiaContext";

const AllBlogs = () => {
  const { allBlogs } = useContext(diaContext);

  return (
    <div className="my-20 px-5 lg:px-40 w-full ">
      <BlogItem allBlogs={allBlogs} />
    </div>
  );
};

export default AllBlogs;
