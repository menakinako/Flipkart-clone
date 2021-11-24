import express from 'express';
import { userSignup, userLogin } from '../controllers/user-controller.js';
import {getProducts, getProductById} from '../controllers/product-controller.js'


const router = express.Router();

//with the help of this api saves data which came from ui from frontend  to mongodb database
router.post('/signup', userSignup);
router.post('/login', userLogin);
router.get('/products', getProducts);
router.get('/product/:id', getProductById);

export default router;