import React from "react";
import { navData } from "../../constants/Data";
import {Box, Typography, makeStyles} from '@material-ui/core';

const useStyle = makeStyles(theme =>({
    component:{
       display:'flex',
       margin: "55px 130px 0 130px",
       justifyContent:"space-between",
       overflowX: "overlay",
       [theme.breakpoints.down('md')]:{
           margin: 0
       }
    },
    container:{
        textAlign: "center",
        padding: "12px 8px"
    },
    image:{
        width: 64
    },
    text: {
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'inherit'
    }
}));



const Navbar =()=>{
    const classes =useStyle();
    return(
         <Box className={classes.component}>
             {
                 navData.map(data=>(
                    <Box className={classes.container}>
                         <img src={data.url} alt=""  className={classes.image}/>
                         <Typography>{data.text}</Typography>
                    </Box>
                 ))
             }
        </Box>
    )
}

export default Navbar;