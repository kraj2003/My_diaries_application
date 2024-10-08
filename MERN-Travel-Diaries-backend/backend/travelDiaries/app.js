//console.log("Welcome to Indian Coders Mern Stack Travel Diaries Application");

import express, { Router } from "express"
import mongoose from "mongoose"
import userRouter from "./routes/user-routes"
import postrouter from "./routes/post-routes"
import dotenv from "dotenv"
import cors from 'cors'
//import { getallposts } from "./controllers/post-controller"
const app= express()
const port = 5000

dotenv.config()
//middlewares
app.use(cors())
app.use(express.json())
app.use('/user',userRouter)
app.use('/posts',postrouter)

//connections
mongoose.connect("mongodb+srv://admin:iZtqDfsuzYgXhCAD@cluster0.iugbgma.mongodb.net/?retryWrites=true&w=majority")
.then(()=>app.listen(port,()=>console.log("connection sucessfull & listening to the port 5000")))
.catch((err)=>console.log(err))

// 
// mongoose.connect(`mongodb+srv://admin:8XVEbFcCeYPrz7cQ@cluster0.iugbgma.mongodb.net/?retryWrites=true&w=majority`)
// .then(()=>app.listen(port,()=>console.log("listening to the port 5000")))
// .catch((err)=>console.log(err))
// app.listen(port,()=>console.log("listening to the port 5000"))
//iZtqDfsuzYgXhCAD