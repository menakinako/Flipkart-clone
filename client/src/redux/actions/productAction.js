import axios from "axios";
import * as actions from '../constants/productConstants';




//async() is a thunk
export const getProducts= ()=> async(dispatch)=>{
    try {
        const {data} = await axios.get(`/products`)
        //part in dispatch curly braces is the action objects
        dispatch({type: actions.GET_PRODUCTS_SUCCESS, payload: data});
        // dispatch then calls the reducer
    } catch (error) {
        dispatch({type: actions.GET_PRODUCTS_FAIL, payload: error.response});
    }
}

export const getProductDetails =(id)=>async(dispatch)=>{
    try {
        const {data} = await axios.get(`/product/${id}`);
        dispatch({type: actions.GET_PRODUCTS_DETAILS_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: actions.GET_PRODUCTS_DETAILS_FAIL, payload: error.reponse});
    }
}