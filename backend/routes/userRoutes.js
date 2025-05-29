import express from 'express'
import { registerUser, loginUser, getAllUsers, loginAdmin } from '../controllers.js/userControllers.js'
import authAdmin from '../middlewares/AdminAuth.js'
import authUser from '../middlewares/auth.js'


const userRouter = express.Router()

userRouter.post("/loginUser", authUser, loginUser)
userRouter.post("/registerUser", registerUser)
userRouter.post("/loginAdmin", authAdmin, loginAdmin)
userRouter.get("/allusers", authAdmin, getAllUsers)



export default userRouter