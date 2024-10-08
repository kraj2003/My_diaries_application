import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
const Home=()=>{
    return(
        <div>
             <Box position={"relative"} width="100%" height="90vh">
                <img src="https://worldexpeditions.com/croppedImages/Africa/Tanzania/Mount-Kilimanjaro_-Tanzania-639819-1100px.jpg "  
                alt="paragliding" width={"100%"} height="70%"/>
                <Typography variant="h3" textAlign={"center"} width="100%" sx={{position:"absolute", top:"0px"}}>
                    Dare to live the life you have dreamed of !!
                </Typography>
                <Box width={"100%"} height="30% " display={"flex"} flexDirection="column">
                    <Typography textAlign={"center"} variant="h4" padding={"4"}>
                        Share your travel diaries with us
                    </Typography>
                    <Box margin={"auto"}>
                        <Button variant="outlined" LinkComponent={Link} to="/add" sx={{mr:2}}>Share your stories</Button>
                        <Button LinkComponent={Link} to="/diaries" variant="contained" sx={{ml:2}}>view diaries</Button>
                    </Box>
                </Box>
                
             </Box>
        </div>
    )
}
export default Home