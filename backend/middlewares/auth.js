import jwt from "jsonwebtoken"



const authUser = async (req, res, next) => {


    try {
        const {token} = req.headers

        if(!token){
            res.json({success: false, message : "not authorized, login again"})
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)

        req.body.userId = token_decode.id

        next()
    } catch (error) {
        console.log(error.message);
        res.json({success : false, message : error.message})
        
    }

}

export default authUser