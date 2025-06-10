import blogModel from "../models/blogModel.js";
import { v2 as cloudinary } from "cloudinary";

const addBlog = async (req, res) => {
  try {
    const { title, content, summary, author, category, published } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    console.log(title, content, summary, author, category);

    console.log(image1, image2, image3, image4);

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    console.log(images);
      
    const blogData = {
      title,
      content,
      summary,
      author,
      category,
      images: images,
      published: published === "true" ? true : false,
      date: Date.now(),
    };

    const newBlog = new blogModel(blogData);

    await newBlog.save();

    res.json({ success: true, message: "Blog added Successfully" });
  } catch (error) {
    console.log();
    res.json({ success: false, message: error.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await blogModel.find({});

    if (!allBlogs) {
      res.json({ success: false, message: "no blogs found" });
    }

    res.json({ success: true, data: allBlogs });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

const getSingleBlog = async (req, res) => {
  try {
    const { blogId } = req.body;

    const singleBlog = await blogModel.findById(blogId);

    if (!singleBlog) {
      res.json({ success: false, message: "blog not found" });
    }

    res.json({ success: true, singleBlog });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, messsage: error.message });
  }
};

const removeBlog = async (req, res) => {
  try {
    const { blogId } = req.body;

    await blogModel.findByIdAndDelete(blogId);

    res.json({ success: true, message: "blog deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { blogId, title, content, summary, author, category, published } =
      req.body;

      
    //   if (req.file) {
    //   updateFields.image = req.file.filename; // or req.file.path
    // }

    const updatedBlog = await blogModel.findByIdAndUpdate(blogId, {
      title,
      content,
      summary, 
      author,
      category,
      published    });

    if (!updatedBlog) {
      res.json({ success: false, message: "blog not updated successfully" });
    }

    res.json({ success: true, message: "blog updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export { addBlog, getAllBlogs, getSingleBlog, removeBlog, updateBlog };
