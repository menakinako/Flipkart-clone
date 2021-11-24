import React, { useState, useContext } from "react";
import { Badge, Box, Button, makeStyles, Typography } from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import {Link} from 'react-router-dom';
import LoginDialog from '../login/Login';
import { LoginContext } from '../../context/contextProvider';
import Profile from "./Profile";
import { useSelector } from "react-redux";


const useStyles = makeStyles(theme=>({
    login:{
        background: '#ffffff',
        color: '#2874f0',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: "5px 40px",
        boxShadow: "none",
        [theme.breakpoints.down('sm')]:{
            background:"#2874f0",
            color:"#fff"
          }
    },
    wrapper:{
       margin: '0 7% 0 auto',
       display: "flex",
       "& > *":{
           marginRight: 50,
           alignItems: "center",
           textDecoration: "none",
           color: '#fff',
          [theme.breakpoints.down('sm')]:{
             color:"#2874f0",
             alignItems: "center",
             display: "flex",
             flexDirection:"column",
             marginTop: 10
           },
       },
      [theme.breakpoints.down('sm')]:{
        display: "block"
      }
    },
    container:{
        display: "flex",
        [theme.breakpoints.down('sm')]:{
            display: "block"
        }
    }
 
}));

const HeaderButtons =({handleClose})=>{
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const {account, setAccount} = useContext(LoginContext);
    
    const { cartItems } = useSelector(state=> state.cart)
    
    const openDialog = () => {
        setOpen(true);
    }

    return(
         <Box className={classes.wrapper}>
             {
                 account?<Profile account={account} setAccount={setAccount}/>:  
                  <Link>
                    <Button onClick={() => openDialog() } className={classes.login} variant="contained" >Login</Button>
                  </Link>
             }
             <Link onClick={handleClose}><Typography style={{marginTop:"5px"}}>More</Typography></Link>
             <Link to="/cart" className={classes.container} onClick={handleClose}>
                 <Badge badgeContent={cartItems.length} color="secondary">
                 <ShoppingCart />
                 </Badge>
             <Typography style={{marginLeft:"10px"}}>Cart</Typography>
             </Link>
             <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount}/>
         </Box>
    );
}

export default HeaderButtons;