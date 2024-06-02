import express from 'express';
import { createPostController, deletePostController, getPostController, getTimelinePostsController, likeAndDislikeController, updatePostController,getAllPostsController } from '../controllers/post.controller.js';
import { parser } from '../config/cloudinary.js';

const router = express.Router();

//create post 
router.post('/create-post',parser.single("img") ,createPostController );

//update post
router.put('/update-post/:id',updatePostController );

//delete post
router.delete('/delete-post/:id',deletePostController );

//likes and dislike
router.put('/like-post/:id',likeAndDislikeController);

//get post
router.get('/get-post/:id',getPostController);

//get all post
router.get('/',getAllPostsController);

//get timelineposts
router.get('/get-timeline-posts/:username',getTimelinePostsController);


export default router;