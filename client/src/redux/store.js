import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductsReducer, getProductDetailReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducer';

const reducer = combineReducers({
    getProducts: getProductsReducer,
    //calling this api(getproductdetails) from ui
    getProductDetails: getProductDetailReducer,
    cart: cartReducer
}) 
const  middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;