import * as actionTypes from '../constants/cartConstant';
import axios from 'axios'




export const addToCart =(id)=>async(dispatch)=>{
    try {
        const {data} = await axios.get(`/product/${id}`);

        dispatch({type: actionTypes.ADD_TO_CART, payload: data});
    } catch (error) {
        console.log("error while calling addtocart api");
    }
}

export const removeFromCart =(id)=>(dispatch)=>{
    dispatch({type: actionTypes.REMOVE_FROM_CART, payload: id})
}