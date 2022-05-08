import React from 'react';
import {Box} from "@mui/material";

function Header({search,setSearch}) {
    return (
        <Box component = "header" sx={{paddingTop:"10px", marginBottom:"20px"}}>
            <Box component="h1" sx={{ display: 'flex', justifyContent: 'center',fontSize:"48px",fontWeight:"600" }}>
                Todo List
            </Box>
        </Box>
    )
}

export default Header;