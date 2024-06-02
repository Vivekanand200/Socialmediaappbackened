import express from 'express';
import { followUserController, unfollowUserController, updateUserController, getUserController, getUserProfileController, deleteUserController, getUserFriendsController } from '../controllers/user.controller.js';
const router = express.Router();
//update user
router.put('/:id', updateUserController);
//delete user
router.delete('/:id', deleteUserController);
//get user
router.get('/:id', getUserController);
//get userProfile
router.get('/', getUserProfileController);
//follow user
router.put('/follow/:id', followUserController);
//unfollow user
router.put('/unfollow/:id', unfollowUserController);
//get all Friends
router.get('/friends/:userId', getUserFriendsController);


export default router;