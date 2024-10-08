import { Box } from "@mui/system";
import React, { useEffect , useState} from "react";
import { getallposts } from "../api-helpers/helpers";
import Item from "./diary-item";



const Diaries=()=>{
    const [posts,setPosts]=useState()
    useEffect(()=>{
        getallposts()
        .then((data)=>setPosts(data?.posts))
        .catch((err)=>console.log(err))
    },[])
    return(
        <Box display="flex" flexDirection={"column"} padding={3} justifyContent="center" alignItems={"center"}>
            {" "}
            {posts && posts.map((item,index)=>(
                <Item location={item.location}
                title={item.title}
                description={item.description}
                id={item._id}
                date={new Date(`${item.date}`).toLocaleDateString()}
                image={item.image} 
                user={item.user._id}
                name={item.user.name}
                key={index}/>
            ))}
            
        </Box>
    )
}
export default Diaries