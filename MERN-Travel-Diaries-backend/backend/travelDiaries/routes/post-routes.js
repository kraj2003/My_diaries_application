import { Router } from "express";
import { addpost, deletePost,  getallposts, postbyid, update} from "../controllers/post-controller";

const postrouter=Router()
postrouter.get("/",getallposts)
postrouter.get("/:id",postbyid)
postrouter.put("/:id",update)
postrouter.delete("/:id",deletePost)
postrouter.post("/",addpost)

module.exports=postrouter