import React, { useState } from "react";
import { Alert, Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Snackbar, Typography } from "@mui/material"
import { red } from "@mui/material/colors";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from "@mui/system";
import { DeleteForever, ModeEditOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { postdelete } from "../api-helpers/helpers";
const Item=({title,description, date, image, location,id, user,name})=>{
  const [open,setopen]=useState(false)
  const isLoggedInuser=()=>{
    if(localStorage.getItem("userId")===user)
    {
      return true
    }
    return false
  }
  const handledelete=()=>{
    postdelete(id).then((data)=>console.log(data)).catch((err)=>console.log(err))
    setopen(true)
  }
    return (
        <Card sx={{ width:"50%",  height:"70vh",margin:1, padding:1, dispaly:"flex" , flexDirection:"column", boxShadow:"5px 5px 10px #ccc"}}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {name.charAt(0)}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                {<LocationOnIcon/>}
              </IconButton>
            }
            title={location}
            header={location}
            subheader={date}
          />
          <img
          width={"100%"}
            height="194"
            src={image}
            alt={title}
          />
          <CardContent>
          <Typography paddingBottom={1} variant="h6" color="text.secondary">
              {title}
              
            </Typography>
            <hr/>
            <Box display={"flex"} paddingTop={1} >
                <Typography width={"170px"} fontWeight={"bold"} variant="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            </Box>
            
        </CardContent>
        {isLoggedInuser() && (<CardActions sx={{marginLeft:" auto "}}>
            <IconButton LinkComponent={Link} to={`/post/${id}`}   color="warning" ><EditIcon/></IconButton>
            <IconButton onClick={handledelete} color="error"><DeleteIcon/></IconButton>
        </CardActions>
        )}
        <Snackbar open={open} autoHideDuration={6000} onClose={()=>setopen(false)}>
        <Alert onClose={()=>setopen(false)} severity="success" sx={{ width: '100%' }}>
        This is a success message!
        </Alert>
        </Snackbar>
        </Card>
        );
    }
    export default Item

