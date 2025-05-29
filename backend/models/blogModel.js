import mongoose from "mongoose";



const blogSchema = new mongoose.Schema({



})



const blogModel = mongoose.models.blog || mongoose.model("blog", blogSchema)


export default blogModel