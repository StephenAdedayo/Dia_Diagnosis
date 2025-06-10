import express from 'express'
import upload from '../middlewares/Multer.js'
import {addBlog, getAllBlogs, getSingleBlog, removeBlog, updateBlog} from '../controllers.js/blogControllers.js'


const blogRouter = express.Router()


blogRouter.post('/add', upload.fields([{name : "image1", maxCount: 1}, {name : "image2", maxCount : 1}, {name : "image3", maxCount : 1}, {name : "image4", maxCount : 1}]), addBlog)
blogRouter.get("/getblogs", getAllBlogs)
blogRouter.get("/singleblog", getSingleBlog)
blogRouter.post("/removeblog", removeBlog)
blogRouter.post("/updateblog", upload.none(), updateBlog)

export default blogRouter