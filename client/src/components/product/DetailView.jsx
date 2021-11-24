import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/productAction";
import {Box, Grid, makeStyles, Table, TableBody, TableCell, TableRow, Typography} from '@material-ui/core';
import { LocalOffer as Badge } from '@material-ui/icons';
import clsx from 'clsx';
import ActionItem from "./ActionItem";

const useStyle = makeStyles(theme=>({
    components :{
        marginTop: 55,
        background: "#f2f2f2"
    },
    container:{
        //margin: "0 80px",
        background:"#fff",
        display: "flex",
        [theme.breakpoints.down('md')]:{
            margin: 0
        }
    },
    rightContainer:{
        marginTop: 50,
        "&>*":{
            marginTop:10
        },
        [theme.breakpoints.down('md')]:{
            marginLeft: 40
        }
    },
    smallText:{
        fontSize: 14,
        verticalAlign: "baseline",
        "&>*":{
            fontSize: 14,
            marginTop: 10
        }
    },
    greyText:{
        color: "#878787"
    },
    price:{
        fontSize: 28
    },
    badge:{
        fontSize: 14,
        marginRight: 10,
        color:"#00cc00"
    }
}))


// match gives access to the param where we can retrieve the id
const DetailView=({match})=>{

    const classes = useStyle();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));

    const { product } = useSelector(state=> state.getProductDetails);

    const dispatch = useDispatch();
       
    useEffect(()=>{
         dispatch(getProductDetails(match.params.id));
    }, [dispatch])

    return(
       <Box className={classes.components}>
           {product && Object.keys(product).length &&
              <Grid container className={classes.container}>
                 <Grid items lg={4} md={4} sm={8} xs={12} >
                    <ActionItem product={product}/>
                 </Grid>
                 <Grid items lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                   <Typography>{product.title.longTitle}</Typography>
                   <Typography className={clsx(classes.smallText, classes.greyText)}>8 Ratings & 1 Reviews</Typography>
                   <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                   <Typography>
                      <span> ₹{product.price.cost}</span> &nbsp; &nbsp; &nbsp;
                       <span className={classes.greyTextColor}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;&nbsp;
                       <span style={{color: '#388E3C'}}>{product.price.discount} off</span>
                   </Typography>
                   <Typography style={{marginTop: 20, fontWeight: 600}}>Available offers</Typography>
                   <Box className={classes.smallText}>
                     <Typography><Badge className={classes.badge} />Special Price Get extra 5% off (price inclusive of discount)</Typography>
                     <Typography><Badge className={classes.badge} />Bank Offer 10% off on SBI Credit Card, up to ₹1500. On orders of ₹5000 and above</Typography>
                     <Typography><Badge className={classes.badge} />Bank Offer 10% off on SBI Debit Card, up to ₹500. On orders of ₹5000 and above</Typography>
                     <Typography><Badge className={classes.badge} />Bank Offer Flat ₹1500 off on SBI Credit Card. On order of ₹30,000 and above</Typography>
                   </Box>
                   <Table>
                       <TableBody>
                           <TableRow className={classes.smallText}>
                               <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                               <TableCell style={{ fontWeight: 600 }}>{date.toDateString()} | ₹40</TableCell>
                           </TableRow>
                           <TableRow className={classes.smallText}>
                               <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                               <TableCell>No Warranty</TableCell>
                           </TableRow>
                           <TableRow className={classes.smallText}>
                               <TableCell className={classes.greyTextColor}>Sellers</TableCell>
                               <TableCell className={classes.smallText}>
                                   <span style={{ color: '#2874f0' }}>SuperComNet</span>
                                   <Typography>GST invoice available</Typography>
                                   <Typography>14 Days Return Policy</Typography>
                                   <Typography>View more sellers starting from ₹329</Typography>
                               </TableCell>
                           </TableRow>
                           <TableRow className={classes.smallText}>
                               <TableCell colSpan= {2} className={classes.greyTextColor}>
                                   <img src={sellerURL} style={{width: 390}}/>
                               </TableCell>
                           </TableRow>
                           <TableRow className={classes.smallText}>
                             <TableCell className={classes.greyTextColor}>Description</TableCell>
                             <TableCell>{product.description}</TableCell>
                          </TableRow>
                       </TableBody>
                   </Table>
                 </Grid>
               </Grid> 
           } 
       </Box>
    )
}
export default DetailView;