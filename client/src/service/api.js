import axios from 'axios';

//backend url
//we need to empty this url as it is a local url and afte deploying heroku will give a diff url of its own
const url = "";

export const authenticateSignup = async(user)=>{
    //user is the object contains data that gets from ui
    try {
        return await axios.post(`${url}/signup`, user);
    } catch (error) {
        console.log("error while calling signup api", error);
    }
}

export const authenticateLogin = async(user)=>{
    try {
        return await axios.post(`${url}/login`, user);
    } catch (error) {
        console.log("error while calling login api", error)
    }
}