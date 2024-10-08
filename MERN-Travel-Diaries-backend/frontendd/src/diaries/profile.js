import { Typography, Button } from "@mui/material"
import { Box } from "@mui/system"
import React, { useEffect, useState } from "react"
import { getpostdetails, getuserdetails } from "../api-helpers/helpers"
import Item from "./diary-item"
import {useDispatch} from "react-redux"
import { authActions} from '../store'
import {useNavigate} from "react-router-dom"
const Profile=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const[user,setusers]=useState()
    useEffect(()=>{
        getuserdetails().then((data)=>setusers(data.user)).catch((err)=>console.log(err))
    },[])
    const handleclick=()=>{
        dispatch( authActions.logout())
        localStorage.removeItem("userId")
        navigate("/")
    }
    return(
        <Box display="flex" flexDirection={"column"}>
            {user &&( <>{" "}<Typography textAlign={"center"} variant="h3" fontFamily={"quicksand"} padding={2}>
            User Profile
            </Typography>
                <Typography fontFamily={"quicksand"} padding={1} textAlign="left">
                    Name: {user.name}
                </Typography>
                <Typography fontFamily={"quicksand"} padding={1} textAlign="left">
                    Email: {user.email}
                </Typography>
                
            <Button onClick={handleclick} sx={{mr:"auto"}} color="pink" variant="conatined" width="15%">Logout</Button>
            <Box display={"flex"} flexDirection={"column"} justifyContent="center" alignItems={"center"}>
                {user.posts.map((post,index)=><Item key={index} title={post.title} date={post.date} description={post.description} image={post.image} location={post.location} id={post.id} user={user._id}/>)}
            </Box>{" "}
            
            </>)}
        </Box>
    )
}
export default Profile






// import React, { useEffect } from "react"
// import { getuserdetails } from "../api-helpers/helpers"
// const Profile=()=>{
//     useEffect(()=>{
//             getuserdetails().then((data)=>console.log(data)).catch((err)=>console.log(err))
//         },[])
//     return (
        
//         <div>Profile</div>
//     )
// }
// export default Profile