import express from 'express';
import Connection from './database/db.js';
import DefaultData from './default.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors  from "cors";
import Routes from './routers/routers.js'

dotenv.config();

const app = express();

app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors());
//data to database(controller(follows complete mvc structure))
app.use('/', Routes);
    


const PORT = process.env.PORT || 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const URL = `mongodb+srv://${username}:${password}@ecommerce.dyjfb.mongodb.net/FLIPKART?retryWrites=true&w=majority`;

Connection(process.env.MONGODB_URI || URL);

if(process.env.NODE_ENV == 'production'){
    app.use(express.static('client/build'))
}

app.listen(PORT, ()=> console.log(`Server is successfully running in port ${PORT}`) );

//default data to database

DefaultData();