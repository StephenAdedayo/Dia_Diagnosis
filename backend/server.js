import express from 'express'
import "dotenv/config"
import connectDB from './config/db.js'
import userRouter from './routes/userRoutes.js'
import connectCloudinary from './config/cloudinary.js'
import blogRouter from './routes/blogRoutes.js'
import cors from 'cors'
import predictRouter from './routes/predictRoutes.js'

const server = express()


const PORT = process.env.PORT || 8000
connectDB()
connectCloudinary()


server.use(express.json())
server.use(cors())

server.use('/api/user', userRouter)
server.use('/api/blog', blogRouter)
server.use("/api/model", predictRouter)

server.get("/", (req, res) => {
     res.json({message : "Api Working"})
})


server.listen(PORT, () => {
    console.log("server started successfuly on", PORT); 
})