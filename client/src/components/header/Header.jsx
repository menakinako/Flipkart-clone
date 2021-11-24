import React, { useState } from "react";
import {AppBar, Toolbar, makeStyles, Typography, Box, IconButton, Drawer, ListItem, List } from '@material-ui/core';
import {Link} from 'react-router-dom';

import Search from './Search';
import HeaderButtons from "./HeaderButtons";
import { withStyles } from "@material-ui/styles";
import { Menu } from '@material-ui/icons'

const useStyles = makeStyles(theme=>({
    header: {
        background: "#2874f0",
        height: 55
    },
    logo:{
      width: 75
    },
    sublogo:{
        width: 10,
        height: 10,
        marginLeft: 4
    },
    container:{
        display: 'flex'
    },
    components:{
        marginLeft: "12%",
        lineHeight:0,
        textDecoration: 'none',
        color: "#ffffff"
    }, 
    subheading:{
        fontSize: 10,
        fontStyle: "italics"
    },
    list:{
        width: 250
    },
    menuButton:{
        display:"none",
        [theme.breakpoints.down('sm')]:{
            display: "block"
        }
    },
    customButtons:{
        margin: '0 7% 0 auto',
        [theme.breakpoints.down('sm')]:{
            display: "none"
        }
    }
}));

const ToolBar = withStyles({
   root: {
       minHeight: 55
   }
})(Toolbar);

const Header = ()=>{
    const classes = useStyles();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const handleOpen=()=>{
        setOpen(true);
    }

    const handleClose=()=>{
        setOpen(false);
    }

    const list=()=>{
        return(
        <Box className={classes.list} >
            <List>
                <ListItem>
                   <HeaderButtons handleClose={handleClose}/>
                </ListItem>
            </List>
        </Box>
        )
    }
    return(
        <AppBar className={classes.header}>
            <ToolBar>
                <IconButton
                color="inherit"
                onClick={handleOpen}
                className={classes.menuButton}
                >
                    <Menu />
                </IconButton>
                <Drawer open={open} onClose={handleClose} onClick={handleClose}>
                   {list()}
                </Drawer>
                <Link to='/' className={classes.components}>
                   <img src={logoURL} className={classes.logo}/>  
                    <Box className={classes.container}>
                      <Typography className={classes.subheading}>Explore <Box component="span" style={{color:"#ffe500"}}>Plus</Box></Typography>
                      <img src={subURL} className={classes.sublogo}/>
                   </Box>
                </Link >
                <Search />
                <span className={classes.customButtons}><HeaderButtons handleClose={handleClose}/></span>
            </ToolBar>
        </AppBar>
    )
}

export default Header;