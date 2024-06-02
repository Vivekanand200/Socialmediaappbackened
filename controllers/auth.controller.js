import { signUpUser } from "../services/auth.service.js";
import { signInUser } from "../services/auth.service.js";



export const signUp = async (req, res) => {
    const { username, email, password } = req.body;
    console.log("jgfxmjfjgf",req.body);
    if (username === '' || email === '' || password === '' || !username || !email || !password) {
        res.json({ message: "All fields must be filled " }); 
    }
    try {

        const newUser = await signUpUser(username, email, password);
        console.log("first");
        const { password: userPassword, ...userData } = newUser._doc;
        res.status(200).json({
            userData,
            message: "Sign Up Success"
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Error occured when signup user",
            error: err.message,
        });
    }
}


//login

export const signIn = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    if (email === '' || password === '' || !email || !password) {
        res.json({ message: "All fields must be filled " });
    }
    try {
        const signedInUser = await signInUser(email, password);
        const { password: userPassword, ...userData } = signedInUser._doc;

        res.json({
            message: "SignIn Successfully",
            userData,
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Error occured when signin user",
            error: err.message,
        });
    }
    console.log('signIn successful');
}
