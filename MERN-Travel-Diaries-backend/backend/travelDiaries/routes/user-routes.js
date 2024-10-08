import { Router } from "express";
import { getallusers, getuserbyid, login, signup } from "../controllers/user-controller";

const userRouter= Router()
userRouter.get('/',getallusers)
userRouter.get('/:id',getuserbyid)
userRouter.post('/signup',signup)
userRouter.post('/login',login)
//export default userRouter
module.exports=userRouter