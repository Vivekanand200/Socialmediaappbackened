import { followUser, getUserFriends, getUserProfile, unfollowUser, updateUser } from "../services/user.service.js";
import { deleteUser } from "../services/user.service.js";
import { getUser } from "../services/user.service.js";



export const updateUserController = async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await updateUser(req.params.id, req.body);
            res.status(200).json({
                user,
                message: "Account has been updated successfully"
            })
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(500).json("You can only update your account")
    }
};


export const deleteUserController = async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await deleteUser(req.params.id);
            res.status(200).json({
                user,
                message: "Account has been deleted successfully"
            })
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(500).json("You can only delete your account")

    }
}

export const getUserController = async (req, res) => {

    try {
        const user = await getUser(req.params.id);
        // const [password,...data] =user._doc;
        res.status(200).json({
            userInfo:user,
            message: "Get user successfully"
        })
    } catch (error) {
        res.status(500).json(error);
    }
}


export const getUserProfileController = async (req, res) => {

    try {
        const user = await getUserProfile(req.query);
        // const [password,...data] =user._doc;
        res.status(200).json({
            userProfileInfo:user,
            message: "Get userProfile successfully"
        })
    } catch (error) {
        res.status(500).json(error);
    }
}


export const followUserController = async (req, res) => {

    try {   
        
        const data = await followUser(req.body,req.params);

        res.status(200).json({
            data,
            message: "You follow successfully"
        })
    } catch (error) {
        res.status(500).json(error);
    }
}



export const unfollowUserController = async (req, res) => {

    try {
        const data = await unfollowUser(req.body,req.params);
        res.status(200).json({
            data,
            message: "you unfollow successfully"
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getUserFriendsController = async (req, res) => {

    try {
        const friends = await getUserFriends(req.params);
        // const [password,...data] =user._doc;
        res.status(200).json({
            friends,
            message: "Get allFriends successfully"
        })
    } catch (error) {
        res.status(500).json(error);
    }
}