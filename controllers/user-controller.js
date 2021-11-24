import User from '../model/userSchema.js';

//this signup api is called from frontend present in service folder
export const userSignup = async(request, response)=>{
    try {
        const exist = await User.findOne({username: request.body.username});

        if(exist){
            return response.status(401).json("username already exits");
        }
        //comes from frontend
        const user = request.body;
        //validate into User(model)
        const newUser = new User(user);
        //saves into database(asynchronous operation)
        await newUser.save();

        response.status(200).json("User is registered successfully")
    } catch (error) {
        console.log("Error:", error.message)
    }
}

export const userLogin = async(request, response) =>{
    try {
        const user = await User.findOne({username: request.body.username, password: request.body.password});

        if(user){
            return response.status(200).json(`${request.body.username} loggesd in successfully`);
        }else{
            return response.status(401).json("invalid login");
        }
    } catch (error) {
        console.log("Error:", error.message)
    }
}