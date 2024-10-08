import { DataObjectOutlined } from '@mui/icons-material'
import axios from 'axios'
import React from 'react'
//import { signup } from '../../../backend/travelDiaries/controllers/user-controller'
export const getallposts=async()=>{
    const res=await axios.get("/posts")
    if(res.status!==200){
        return console.log("some error occurred")
    }
    
    const data=res.data
    console.log(data)
    return data
    
}
// export const sendAuthRequest=async(signup,data)=>{
//     const res=await axios.post(`/user${signup ? "/signup" :" /login"}/`,{
//         name:data.name ? data.name:" ",
//         email:data.email,
//         password:data.password
//     }).catch(err=>console.log(err))

//     if(res.status!==200 && res.status!==201){
//         return console.log("unexpected error occurred")
//     }
//     const resData= await res.data
//     return resData
// }

export const sendAuthRequest=async(signup,data)=>{
    const res= await axios.post(`/user/${signup? "signup": "login"}/`,{
        name:data.name ? data.name :" ",
        email:data.email,
        password:data.password
    }).catch((err)=>console.log(err))
    if(res.status !==200 && res.status!==201){
        return console.log("uanable to authenticate")
    }
    const resData=await res.data
    return resData
}
export const addpost=async(data)=>{
    const res =await axios.post("/posts/",{
        title:data.title,
        description:data.description,
        location:data.location,
        image:data.imageurl,
        date:data.date,
        user:localStorage.getItem("userId"),
    })
    .catch((err)=>console.log(err))

    if(res.status !==201 ){
        return console.log("error occurred")
    }
    const resData=await res.data
    console.log(resData)
    return resData
}
export const getpostdetails=async(id)=>{
    const res= await axios.get(`/posts/${id}`).catch((err)=>console.log(err))
    if(res.status !==200){
        return console.log("unable to fetch the data")
    }
    const resData=await res.data
    return resData
}
/////unlocked the getpost detaied
export const postUpdate= async(data,id)=>{
    const res= await axios.put(`/posts/${id}`,{
        title:data.title,
        location:data.location,
        image:data.imageurl,
        description:data.description
    }).catch((err)=>console.log(err))
    if(res.status!==200){
        return console.log("unable to update")
    }
    const resData=await res.data
    return resData
}
export const postdelete=async(id)=>{
    const res=await axios.delete(`/posts/${id}`)
    .catch((err)=>console.log(err))

    if(res.status!==200){
        return console.log("unable to delete")
    }
    const resData=res.data
    return resData
}
export const getuserdetails=async()=>{
    const id=localStorage.getItem("userId")
    const res=await axios.get(`/user/${id}`).catch((error)=>console.log(error))

    if(res.status!==200){
        return console.log("user not found")
    }
    const resData=await res.data
    return resData 
}