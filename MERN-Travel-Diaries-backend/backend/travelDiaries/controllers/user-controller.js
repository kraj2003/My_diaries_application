import { compareSync, hashSync } from "bcryptjs";
import User from "../models/User"

export const getallusers=async(req,res)=>{
    let users;
    try {
        users=await User.find()
    } catch (error) {
        return console.log(error)
    }
    if(!users){
        return res.status(500).json({msg:"unexpected error ocurred"})
    }
     return res.status(200).json({users})
}
// export const getuserbyid=async(req,res)=>{
//     const id=req.params.id
//     let user
//     try {
//         user=await User.findById(id).populate("posts")
//     } catch (error) {
//         return console.log(err)
//     }
//     console.log(user)
//     if(!user){
//         return res.status(404).json({msg:"no user found"})
//         console.log("user not found")
//     }
//     return res.status(200).json({user})
// }
// export const getuserbyid=async(req,res)=>{
//     const id=req.params.id
//     let user
//     try {
//         user=await User.findById(id).populate("posts")
//     } catch (error) {
//         return console.log(error)
//     }
//     if(!user){
//         return res.status(404).json({msg:"no user found"})
//     }
//     return res.status(200).json({user})
// }
export const getuserbyid=async(req,res)=>{
    const id=req.params.id
    let user
    try{
        user=await User.findById(id).populate("posts")
    }
    catch(err){
        return console.log(err)
    }
    if(!user){
        return res.status(404).json({msg:"no user found"})
    }
    return res.status(200).json({user})
}
export const signup=async(req,res,next)=>{
    const {name,email,password}=req.body
    if(!name && name.trim()==="" && !email && email.trim()=='' && !password && password.length<6){
        return res.status(422).json({msg:"invalid data"})
    }
    const hashedpassword=hashSync(password)
    let user
    try {
    user=new User({name,email,password:hashedpassword})
    await user.save()
} catch (error) {
    return console.log(error)
    
}
if(!user){
    return res.status(500).json({msg:"unexpected error occurred"})
}
return res.status(201).json({user})
}
 //login
 export const login=async(req,res,next)=>{
    const {email,password}=req.body
    if( !email && email.trim()==='' && !password && password.length<6){
        return res.status(422).json({msg:"invalid data"})
    }
    let existinguser
    try {
        existinguser= await User.findOne({email})
    } catch (error) {
        return console.log(error)
    }
    if(!existinguser){
        return res.status(404).json({msg:"user not found"})
    }
    const iscorrectpassword= compareSync(password,existinguser.password)
    if(!iscorrectpassword){
        return res.status(400).json({msg:"incorrect password"})
    }
    return res.status(200).json({id:existinguser._id,msg:"user logged in sucessfully"})
 }