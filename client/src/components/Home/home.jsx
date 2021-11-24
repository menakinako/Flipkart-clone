import React, { useEffect } from "react";
import Navbar from './Navbar';
import Banner from "./Banner";
import Slide from "./Slide";
import MidSection from "./MidSection";
import MidSlide from "./MidSlide";
//import { products } from "../../constants/Data";
import { Box, makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import {getProducts as listProducts} from '../../redux/actions/productAction'

const useStyle = makeStyles({
   component: {
       padding: 10,
       background: '#F2F2F2'
   }
})


const Home =()=>{
    const classes = useStyle();

    const { products } = useSelector(state => state.getProducts);

    const dispatch = useDispatch();
// each time the value of dispatch changes useeffect calls the dispatch func 
    useEffect(()=>{
       dispatch(listProducts());
    },[dispatch] )


    return(
     <div>
         <Navbar />
        <Box className={classes.component}>
           <Banner />
          <MidSlide products={products} />
          <MidSection />
          <Slide 
           timer={false}
           title="Discount for You"
           products={products}
          />
         <Slide 
         timer={false}
         title="Suggested Items"
         products={products}
         />
         <Slide 
         timer={false}
         title="Top Selections"
         products={products}
         />
         <Slide 
         timer={false}
         title="Festive Offer"
         products={products}
         />
         <Slide 
         timer={false}
         title="Recommended Items"
         products={products}
         />
         <Slide 
         timer={false}
         title="BestSellers"
         products={products}
         />
        </Box>
     </div>
    )
}

export default Home;