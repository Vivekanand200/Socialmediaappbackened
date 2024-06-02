import userModel from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
export const signUpUser = async (username, email, password) => {

    
        const hashedPassword = bcryptjs.hashSync(password,10);
        const newUser = new userModel({
            username,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        console.log(newUser);
        return newUser;
};



export const signInUser = async ( email, password) =>{
    const user = await userModel.findOne({email});
    !user && res.status(404).json("user not found");

    const passwordCheck = await bcryptjs.compareSync(password,user.password);   
    !passwordCheck && res.status(404).json("worng password");

    return user;
}


