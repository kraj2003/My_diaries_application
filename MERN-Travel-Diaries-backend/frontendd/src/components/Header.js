import React from "react"
import { useState } from "react";
import {useSelector} from "react-redux"
import {AppBar, Toolbar ,Tabs, Tab} from "@mui/material"
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { Link } from "react-router-dom";

const linksarray=["home","diaries","auth"]
const  loggedinlinks=["home","diaries","add","profile"]
//const[value,setvalue]=useState('')
const Header=()=>{
    const isLoggedIn=useSelector((state)=>state.isLoggedIn)
    const [value,setvalue]=useState('')
    return (
        <AppBar sx={{bgcolor:"transparent", position:"sticky"}}>
            <Toolbar>
                <TravelExploreIcon sx={{color:"black"}}/>
                <Tabs value={value} onChange={(e,val)=>setvalue(val)} sx={{ml:"auto",textDecoration:"none"}}>
                    { isLoggedIn 
                    ? loggedinlinks.map((link)=>(
                        <Tab 
                        LinkComponent={Link}
                        to={`${link=== "home" ? " " : link}`}
                        sx={{textDecoration:"none",":hover":{
                            textDecoration:"underline",
                            textUnderlineOffset:"18px"
                        }}} key={link} label={link}/>
                    ))
                    
                    : linksarray.map((link)=>(
                        <Tab 
                        LinkComponent={Link}
                        to={`${link=== "home" ? " " : link}`}
                        sx={{textDecoration:"none",":hover":{
                            textDecoration:"underline",
                            textUnderlineOffset:"18px"
                        }}} key={link} label={link}/>
                    ))}
                </Tabs>
            </Toolbar>
        </AppBar>
    )
}
export default Header
//import TravelExploreIcon from '@mui/icons-material/TravelExplore';