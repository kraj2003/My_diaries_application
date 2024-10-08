import React, { useState} from "react"
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import {Box, Typography,FormLabel,TextField,Button } from "@mui/material"
import { addpost } from "../api-helpers/helpers";
import {useDispatch} from "react-redux"
import { authActions} from '../store'
import {useNavigate} from "react-router-dom"
const Add=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const[inputs,setinputs]=useState({title:"",description:"",location:"", imageurl:"",date:""})
    const handlechange=(e)=>{
        setinputs((preState)=>({
            ...preState,
            [e.target.name]:e.target.value
        }))
    }
    const onrespreceived=(data)=>{
        console.log(data)
        navigate("/diaries")
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(inputs)
        addpost(inputs).then(onrespreceived).catch((error)=>console.log(error))
    }
    return(
        <Box display="flex" flexDirection={"column" } width="1005" height="100%">
            <Box padding={2} margin="auto" display="flex">
            <Typography fontWeight={'bold'} variant="h4" fontFamily={"dancing script"}>
                ADD your travel diary
            </Typography>
            <TravelExploreIcon sx={{fontSize:"40px" , paddingLeft:1, color:"lightcoral" }}/>
            </Box>
            <form onSubmit={handlesubmit}>
                <Box padding={3} display="flex" width="80%" margin="auto" flexDirection={"column"}>
                    <FormLabel sx={{fontFamily:"quicksand"}}>Title</FormLabel>
                    <TextField onChange={handlechange} name="title" value={(inputs.title)} variant="standard" margin="normal"/>
                    <FormLabel sx={{fontFamily:"quicksand"}} >description</FormLabel>
                    <TextField onChange={handlechange}  name="description" value={(inputs.description)} variant="standard" margin="normal"/>
                    <FormLabel sx={{fontFamily:"quicksand"}}>image url</FormLabel>
                    <TextField onChange={handlechange}  name="imageurl" value={(inputs.imageurl)}  variant="standard" margin="normal"/>
                    <FormLabel sx={{fontFamily:"quicksand"}}>location</FormLabel>
                    <TextField onChange={handlechange}  name="location" value={(inputs.location)} variant="standard" margin="normal"/>
                    <FormLabel sx={{fontFamily:"quicksand"}}>date</FormLabel>
                    <TextField type="date" onChange={handlechange}  name="date" value={(inputs.date)} variant="standard" margin="normal"/>
                    <Button type="submit" color="warning" sx={{mt:2, width:"50%", margin:"auto" , borderRadius:7}} variant="conatined">post</Button>
                </Box>
            </form>
        </Box>

    )
}
export default Add