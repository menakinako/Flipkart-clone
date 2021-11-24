import { Box, Button, makeStyles } from "@material-ui/core";
import clsx from 'clsx';
import {ShoppingCart as Cart, FlashOn as Flash} from '@material-ui/icons';
import { addToCart } from "../../redux/actions/cartAction";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const useStyle = makeStyles(theme=>({
    leftContainer:{
        padding: "40px 0 0 80px",
        [theme.breakpoints.down('md')]:{
            padding: "20px 40px"
        }
    },
    image:{
      padding: "15px 20px",
      border: "1px solid #f0f0f0",
      width: "96%"
    },
    button:{
      height: 50,
      width: "46%",
      borderRadius: 2
    },
    addToCart:{
        background: "#FF9F00",
        color: '#fff',
        marginRight: 10
    },
    buyNow:{
        background: '#fb641b',
        color: "#fff"
    }
}))


const ActionItem =({ product })=>{
const classes = useStyle();

const dispatch = useDispatch();
const history = useHistory();

const cartAdded = ()=>{
    dispatch(addToCart(product.id));
    history.push('/cart');
}

    return(
        <Box className={classes.leftContainer}>
            <img src={product.detailUrl} className={classes.image}/><br/>
            <Button onClick={()=> cartAdded()} className={clsx(classes.button, classes.addToCart)}><Cart />Add to Cart</Button>
            <Button className={clsx(classes.button, classes.buyNow)}><Flash />Buy Now</Button>
        </Box>
    )
}

export default ActionItem;