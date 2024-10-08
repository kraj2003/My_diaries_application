

import React ,{useState} from 'react'
import {Box, FormLabel, Typography , TextField, Button} from "@mui/material"
import { sendAuthRequest } from '../api-helpers/helpers'
import {useDispatch} from "react-redux"
import { authActions } from "../store"

import  {useNavigate} from "react-router-dom"
const Auth=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const[ issignup, setissignup]=useState(true)
    const onrespreceived=(data)=>{
        if(issignup){
            localStorage.setItem("userId", data.user._id)
        }
        else{
            localStorage.setItem("userId",data.id)
        }
        dispatch(authActions.login())
        navigate("/diaries")
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(inputs)

        if(issignup){
            sendAuthRequest(true,inputs)
            .then(onrespreceived)
            .catch((err)=>console.log(err))
        }
        else{
            sendAuthRequest(false,inputs)
            .then(onrespreceived)
            .catch((err)=>console.log(err))
        }
        }
        const [inputs,setinputs]=useState({name:"",email:"",password:" "})
        const handlechange=(e)=>{
            setinputs((preState)=>({
                ...preState,
                [e.target.name]:e.target.value
            }))
        }
    return(
        <Box width="40%" borderRadius={10} boxShadow={"5px 5px 10px #ccc"} margin={"auto"} marginTop={10}>
            <form onSubmit={handlesubmit}>
                <Box display="flex" flexDirection={"column"} width="60%" padding={5} margin="auto">
                    <Typography  padding={1} variant="h4" textAlign="center">{issignup ?"Signup": "Login"}</Typography>
                    {issignup && (<><FormLabel>Name </FormLabel>
                    <TextField onChange={handlechange} value={inputs.name} name="name" required margin="normal"/></>)}
                    <FormLabel>email </FormLabel>
                    <TextField onChange={handlechange} value={inputs.email} type="email" name="email" required margin="normal"/>
                    <FormLabel>password </FormLabel>
                    <TextField  onChange={handlechange} value={inputs.password} name="password" type="password" required margin="normal"/>
                    <Button  sx={{mx:2,borderRadius:10}} type="submit" variant="contained">{issignup ?"Signup": "Login"}</Button>
                    <Button onClick={()=>setissignup(!issignup)} sx={{mt:2,borderRadius:10}}  variant="outlined"> change to {issignup ? "Login":"Signup"} </Button>
                </Box>
            </form>
        </Box>
    )
}
export default Auth


