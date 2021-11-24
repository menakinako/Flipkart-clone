import { Backdrop, Box, Button, makeStyles, Typography } from "@material-ui/core";
import {useHistory} from "react-router-dom"

const useStyle= makeStyles({
    component:{
        margin: "80px 140px",
        width: "80%",
        background:"#fff",
        height: "60vh"
    },
    image:{
        width: "15%"
    },
    container:{
        textAlign: "center",
        paddingTop: 70,
        "&>*":{
            marginTop: 10,
            fontSize: 14
        }
    },
    button:{
        marginTop: 20,
        padding: "12px 70px",
        borderRadius: 2,
        fontSize: 14,
        background: "#2874f0",
        color: "#fff"
    }
})


const EmptyCart =({ cartItems })=>{
    const classes = useStyle();
    const history = useHistory();
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

    const addItems=()=>{
        history.push("/");
    }
    return(
        <Box className={classes.component}>
            <Box className={classes.container}>
               <Box className={classes.header}>
                  <Typography style={{fontWeight: 600, fontSize: 16}}>My Cart({cartItems.length})</Typography>
                </Box>
                 <img src={imgurl} className={classes.image}/>
                 <Typography>Your cart is empty!</Typography>
                 <Typography>Add items to it now.</Typography>
                 <Button variant="contained" className={classes.button} onClick={()=> addItems()}>Shop Now</Button>
            </Box>
        </Box>
    )
}

export default EmptyCart;