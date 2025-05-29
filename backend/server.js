import express from 'express'
import "dotenv/config"
import connectDB from './config/db.js'
import userRouter from './routes/userRoutes.js'

const server = express()


const PORT = process.env.PORT || 8000
connectDB()


server.use(express.json())
server.use('/api/user', userRouter)

server.get("/", (req, res) => {
     res.json({message : "Api Working"})
})


server.listen(PORT, () => {
    console.log("server started successfuly on", PORT); 
})