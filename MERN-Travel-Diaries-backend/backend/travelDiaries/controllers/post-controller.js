import mongoose from "mongoose"
import Post from "../models/Post"
import User from "../models/User"

export const getallposts=async (req,res)=>{
    let posts
    try {
        posts = await Post.find().populate("user")
    } catch (error) {
        return console.log(error)
    }
    if(!posts){
        return res.status(500).json({msg:"unexpected error occurred"})
    }
    return res.status(200).json({posts})
}
export const addpost=async  (req,res)=>{
    const {title,description,location, date,image,user}=req.body
    if(!title && title.trim()==="" &&
    !description && description.trim()==="" &&
    !location && location.trim()==="" &&
    !date  &&
    !image && image.trim()==="" &&
    !user
    ){
        return res.status(422).json({msg:"inavlid data"})
    }
    let existinguser;
    try {
        existinguser=await User.findById(user)

    } catch (error) {
        return console.log(error)
    }
    if(!existinguser){
        return res.status(404).json({msg:" not found"})
    }
    let post
    try {
        post = new Post({title,description,image,location,date:new Date(`${date}`),user})
        const session=await mongoose.startSession()
        session.startTransaction()
        existinguser.posts.push(post)
        await existinguser.save({session})

        post =await post.save({session})
        session.commitTransaction()
    } catch (error) {
        return console.log(error)
    }
    if(!post){
        return res.status(500).json({msg:"unexpected error occurred"})
    }
    return res.status(201).json({post})
}
export const postbyid=async (req,res)=>{
    const id =req.params.id
    let post
    try {
        post= await Post.findById(id)
    } catch (error) {
        return console.log(error)
    }
    if(!post){
        return res.status(404).json({msg:"post not found"})
    }
    return res.status(200).json({ post })
}
export const update= async (req,res)=>{
    const id= req.params.id
    const {title,description,location,image}=req.body
    if(!title && title.trim()==="" &&
    !description && description.trim()==="" &&
    !location && location.trim()==="" &&
    !image && image.trim()===""
    ){
        return res.status(422).json({msg:"inavlid data"})
    }
    let post 
    try {
        post= await Post.findByIdAndUpdate(id,{
            title,description,image,location
        })
    } catch (error) {
        return console.log(error)
    }
    if(!post){
        return res.status(500).json({msg:" unable to update"})
    }
    return res.status(200).json({msg:"post updated sucessfully"})
}
//deleet
export const deletePost=async (req,res)=>{
    const id=req.params.id
    let post
    try {
        const session=await mongoose.startSession()
        session.startTransaction()
        post= await Post.findById(id).populate("user")
        // post.user.post.pull(post)
        post.user.post.pull(post)
        await post.user.save({session})
        post = await Post.findByIdAndRemove(id)
        session.commitTransaction()
    } catch (error) {
        return console.log(error)
    }
    if(!post){
        return res.status(500).json({msg:"unable to delete"})
    }
    return res.status(200).json({msg:"deleted sucessfully"})
}