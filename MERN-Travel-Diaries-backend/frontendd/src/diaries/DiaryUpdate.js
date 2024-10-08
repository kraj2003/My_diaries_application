// import React , {useEffect, useState} from "react"
// import {useParams} from "react-router-dom"
// import { addpost, getpostdetails , postUpdate} from "../api-helpers/helpers"
// import {Box, TextField,Typography,FormLabel,Button} from "@mui/material"
// import TravelExploreIcon from '@mui/icons-material/TravelExplore';
// const DiaryUpdate=()=>{
//     const [post, setposts]=useState()
//     const[inputs,setinputs]=useState({title:" ",description:" ",location:" ", imageurl:" ",date:" "})
//     const id=useParams().id
//     console.log(id)
    
//     useEffect(()=>{ 
//         getpostdetails(id)
//         .then((data)=>setposts(data.post))
        
//         setinputs({title:data.post.title,
//             description:data.post.description,
//             location:data.post.location,
//             imageurl:data.post.image}).catch((err)=>console.log(err))
//     }, [id])
    
//     const handlechange=(e)=>{
//         setinputs((preState)=>({
//             ...preState,
//             [e.target.name]:e.target.value
//         }))
//     }
//     const handlesubmit=(e)=>{
//         e.preventDefault()
//         console.log(inputs)
//         postUpdate(inputs,id).then((data)=>console.log(data)).catch((err)=>console.log(err))
//     }
//     return(
//         <Box display="flex" flexDirection={"column" } width="1005" height="100%">
//             <Box padding={2} margin="auto" display="flex">
//             <Typography fontWeight={'bold'} variant="h4" fontFamily={"dancing script"}>
//                 ADD your travel diary
//             </Typography>
//             <TravelExploreIcon sx={{fontSize:"40px" , paddingLeft:1, color:"lightcoral" }}/>
//             </Box>
//             {post && (<form onSubmit={handlesubmit}>
//                 <Box padding={3} display="flex" width="80%" margin="auto" flexDirection={"column"}>
//                     <FormLabel sx={{fontFamily:"quicksand"}}>Title</FormLabel>
//                     <TextField onChange={handlechange} name="title" value={(inputs.title)} variant="standard" margin="normal"/>
//                     <FormLabel sx={{fontFamily:"quicksand"}} >description</FormLabel>
//                     <TextField onChange={handlechange}  name="description" value={(inputs.description)} variant="standard" margin="normal"/>
//                     <FormLabel sx={{fontFamily:"quicksand"}}>image url</FormLabel>
//                     <TextField onChange={handlechange}  name="imageurl" value={(inputs.imageurl)}  variant="standard" margin="normal"/>
//                     <FormLabel sx={{fontFamily:"quicksand"}}>location</FormLabel>
//                     <TextField onChange={handlechange}  name="location" value={(inputs.location)} variant="standard" margin="normal"/>
//                     <Button type="submit" color="warning" sx={{mt:2, width:"50%", margin:"auto" , borderRadius:7}} variant="conatined">post</Button>
//                 </Box>
//             </form>)}
//         </Box>

//     )
// }
// export default DiaryUpdate
 import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { getpostdetails, postUpdate } from '../api-helpers/helpers'
import {Box, TextField,Typography,FormLabel,Button} from "@mui/material"
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
const DiaryUpdate=()=>{
    const [post, setposts]=useState()

    const[inputs,setinputs]=useState({title:"",description:"",location:"", imageurl:" "})
    const id=useParams().id
    console.log(id)
    useEffect(()=>{
        getpostdetails(id).then((data)=>{
            
            setposts(data.post)
            setinputs({title:data.post.title,
                description:data.post.description,
                location:data.post.location,
                imageurl:data.post.image})
        })
        .catch((err)=>console.log(err))
    },[])
    const handlechange=(e)=>{
        setinputs((preState)=>({
            ...preState,
            [e.target.name]:e.target.value
        }))
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(inputs)
        postUpdate(inputs,id).then((data)=>console.log(data)).catch((err)=>console.log(err))
    }
    return(
        <Box display="flex" flexDirection={"column" } width="1005" height="100%">
            <Box padding={2} margin="auto" display="flex">
            <Typography fontWeight={'bold'} variant="h4" fontFamily={"dancing script"}>
                ADD your travel diary
            </Typography>
            <TravelExploreIcon sx={{fontSize:"40px" , paddingLeft:1, color:"lightcoral" }}/>
            </Box>
            {post && <form onSubmit={handlesubmit}>
                <Box padding={3} display="flex" width="80%" margin="auto" flexDirection={"column"}>
                    <FormLabel sx={{fontFamily:"quicksand"}}>Title</FormLabel>
                    <TextField onChange={handlechange} name="title" value={(inputs.title)} variant="standard" margin="normal"/>
                    <FormLabel sx={{fontFamily:"quicksand"}} >description</FormLabel>
                    <TextField onChange={handlechange}  name="description" value={(inputs.description)} variant="standard" margin="normal"/>
                    <FormLabel sx={{fontFamily:"quicksand"}}>image url</FormLabel>
                    <TextField onChange={handlechange}  name="imageurl" value={(inputs.imageurl)}  variant="standard" margin="normal"/>
                    <FormLabel sx={{fontFamily:"quicksand"}}>location</FormLabel>
                    <TextField type="date" onChange={handlechange}  name="date" value={(inputs.date)} variant="standard" margin="normal"/>
                    <Button type="submit" color="warning" sx={{mt:2, width:"50%", margin:"auto" , borderRadius:7}} variant="conatined">post</Button>
                </Box>
            </form>}
        </Box>

    )
}
export default DiaryUpdate