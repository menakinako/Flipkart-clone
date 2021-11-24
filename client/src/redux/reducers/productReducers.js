import * as actionType from '../constants/productConstants'


export const getProductsReducer=(state = {products: []}, action)=>{
    switch (action.type) {
        case actionType.GET_PRODUCTS_SUCCESS:
            return {products: action.payload}
        case actionType.GET_PRODUCTS_FAIL:
            return {error: action.payload}
        default:
            return state
          
    }
}

export const getProductDetailReducer=(state = {product:{}}, action)=>{
    switch (action.type) {
        case actionType.GET_PRODUCTS_DETAILS_SUCCESS:
            return {product: action.payload}
        case actionType.GET_PRODUCTS_DETAILS_FAIL:
                return {error: action.payload}    
        default:
           return state;
    }
}