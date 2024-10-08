import { model, Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:6,
    },
    post:[{
        type:mongoose.Types.ObjectId,ref:"Post"
    }]
})
export default model("User",userSchema)