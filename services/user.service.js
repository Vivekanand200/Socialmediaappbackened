import bcryptjs from 'bcryptjs';
import userModel from '../models/user.model.js';


export const updateUser = async (userId, updateData) => {

    if (updateData.password) {
        try {
            updateData.password = await bcryptjs.hashSync(updateData.password, 10);
        } catch (error) {
            throw error;
        }
    }
    try {
        const user = await userModel.findByIdAndUpdate(userId, {
            $set: updateData
        }, {
            new: true,
        });

        return user;
    } catch (error) {
        throw error;
    }
};


export const deleteUser = async (userId) => {

    try {
        await userModel.findByIdAndDelete(userId);

    } catch (error) {
        throw error;
    }
};


export const getUser = async (userId) => {
    try {
        const user = await userModel.findById(userId);
        console.log(user)
        return user;

    } catch (error) {
        throw error;
    }
};
export const getUserProfile = async (query) => {
    try {
        const user = await userModel.findOne({ username: query.username });
        return user;

    } catch (error) {
        throw error;
    }
};


export const followUser = async (userdata, updateData) => {

    if (userdata.userId !== updateData.id) {
        console.log("rahul");
        try {
            const user = await userModel.findById(userdata.userId);
            const currentUser = await userModel.findById(updateData.id);
            if (!user.followers.includes(userdata.userId)) {
                await user.updateOne({ $push: { followers: updateData.id } })
                await currentUser.updateOne({ $push: { followings: userdata.userId } })
                return { user, currentUser };
            } else {
                throw new Error("you have already followed this user");
            }

        } catch (error) {
            throw error;
        }
    } else {
        throw new Error("You cannot follow yourself")
    }
};


export const unfollowUser = async (userdata, updateData) => {
    if (userdata.userId === updateData.id) {

        throw new Error("You cannot unfollow yourself");
    } else {
        try {
            const user = await userModel.findById(userdata.userId);
            const currentUser = await userModel.findById(updateData.id);
            if (user.followers.includes(updateData.id)) {
                await user.updateOne({ $pull: { followers: updateData.id } })
                await currentUser.updateOne({ $pull: { followings: userdata.userId } })
                return { user, currentUser };
            } else {
                throw new Error("you don't  follow this user");
            }
        } catch (error) {
            throw error;
        }
    }
};


export const getUserFriends = async (params) => {
    try {
        const user = await userModel.findById(params.userId);
        const friends = await Promise.all(
            user.followings.map((friendId) => {
                return userModel.findById(friendId);
            })
        )
        const friendList = [];
        friends.map((friend) => {
            const {_id,username,profilePicture} = friend;
            friendList.push({_id,username,profilePicture});
        });
        return friendList;
    } catch (error) {
        throw error;
    }
};