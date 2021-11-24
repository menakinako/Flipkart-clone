import { Box, Button, Dialog, DialogContent, makeStyles, TextField, Typography } from "@material-ui/core";
import React, {useState} from "react";
import {authenticateSignup, authenticateLogin} from '../../service/api'

const useStyle = makeStyles({
    component:{
        height: "70vh",
        width:"90vh",
    },
    image:{
        backgroundImage: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
        height:"70vh",
        width:"40%",
        backgroundRepeat:"no-repeat",
        background:"#2874f0",
        backgroundPosition:" center 85%",
        padding: "45px 35px",
        '& > *':{
            color:"#ffffff",
           
        }
    },
    login:{
        padding: '25px 35px',
        display :" flex",
        flex: 1,
        flexDirection: 'column',
        "& > *":{
            marginTop: 20
        }
    },
    text:{
        color:"#878787",
        fontSize: 12
    },
    loginBtn:{
        textTransform: "none",
       background:"#fb641b",
       color:"#ffffff",
       height: 48,
       borderRadius: 2
    },
    request:{
        textTransform: "none",
        background:"#ffffff",
        color:"#2874f0",
        height: 48,
        borderRadius: 2,
        boxShadow:"0 2px 4px 0 rgb(0 0 0 / 20%)"
    },
    createText:{
      textAlign: "center",
      marginTop: "auto",
      fontSize: 14,
      color: "#2874f0",
      fontWeight: 600,
      cursor: "pointer"
    },
    error:{
        fontSize: 10,
        color: "#ff6161",
        marginTop: 10,
        lineHeight: 0,
        fontWeight: 600
    }
})

const initialValue = {
    login:{
       view: "login",
       heading:"Login",
       subHeading: "Get access to your Orders, Wishlist and Recommendations"
    },
    signup:{
        view: "signup",
       heading:"Looks like you're new here!",
       subHeading: "Sign up with your mobile number to get started"
    }
}

const signupinitialValue ={
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    phone:""
}

const logininitialvalue ={
    username:"",
    password:""
}

const Login = ({ open, setOpen, setAccount })=>{

    const classes = useStyle();

    const [account, toggleAccount] = useState(initialValue.login);
    const [signup, setSignup] = useState(signupinitialValue);
    const [login, setLogin] = useState(logininitialvalue);
    const [error, setError] = useState(false);

    const toggleButton =()=>{
        toggleAccount(initialValue.signup);
    }

     const handleClose = () =>{
            setOpen(false);
            toggleAccount(initialValue.login);
       }

       const signupUser =async()=>{
           let response = await authenticateSignup(signup);
           if(!response) return;
           handleClose();
           setAccount(signup.username);
       }

       const loginUser= async()=>{
        let response = await authenticateLogin(login);
        if(!response){
            setError(true);
            return;
        } 
        handleClose();
        setAccount(login.username);
       }

       const onInputChange =(e)=>{
           setSignup({...signup, [e.target.name]: e.target.value});
       }

       const onValueChange =(e)=>{
           setLogin({...login, [e.target.name]: e.target.value})
       }

    return(
        <Dialog open={open} onClose={handleClose} >
            <DialogContent className={classes.component}>
                <Box style={{display:"flex"}}>
                    <Box className={classes.image}>
                        <Typography variant="h5" style={{fontWeight: 600}}>{account.heading}</Typography>
                        <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view === 'login' ?
                        <Box className={classes.login}>
                        <TextField name="username" onChange={(e)=> onValueChange(e)} label="Enter your Email/Mobile Number"/>
                        <TextField name="password" onChange={(e)=> onValueChange(e)} label="Enter your Password"/>
                         {error && <Typography className={classes.error}>Invalid Username or Password</Typography>}
                        <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                        <Button variant="contained" onClick={()=> {loginUser()}}className={classes.loginBtn}>Login</Button>
                        <Typography style={{textAlign: "center"}} className={classes.text}>OR</Typography>
                        <Button variant="contained" className={classes.request}>Request OTP</Button>
                        <Typography className={classes.createText} onClick={()=> toggleButton()}>New to Flipkart? Create an account</Typography>
                    </Box>:
                    <Box className={classes.login}>
                    <TextField name="firstname" onChange={(e)=> onInputChange(e)} label="Enter your First Name"/>
                    <TextField name="lastname" onChange={(e)=> onInputChange(e)} label="Enter your Last Name"/>
                    <TextField name="username" onChange={(e)=> onInputChange(e)} label="Enter your User Name"/>
                    <TextField name="email" onChange={(e)=> onInputChange(e)} label="Enter your Email"/>
                    <TextField name="password" onChange={(e)=> onInputChange(e)} label="Enter your Password"/>
                    <TextField name="phone" onChange={(e)=> onInputChange(e)} label="Enter your Mobile Number"/>
                    <Button variant="contained" onClick={()=> signupUser()} className={classes.loginBtn}>Sign Up</Button>
                </Box>
                    }
                    
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login;