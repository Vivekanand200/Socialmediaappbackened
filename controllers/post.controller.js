import { createPost, deletePost, getPost, getTimelinePosts, likeAndDislike, updatePost ,getAllPosts} from "../services/post.service.js";


export const createPostController = async (req, res) => {
    try {
        const newPost = await createPost(req.body,req.file.path);
        res.status(200).json({
            newPost,
            message: "Post has been created successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "Post could not be create",
            error,
        }
        );
    }

};


export const updatePostController = async (req, res) => {
    try {
        
        const updatedPost = await updatePost(req.params,req.body);
        
        res.status(200).json({
            updatedPost,
            message: "Post has been updated successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "Post could not be update",
            error,
        }
        );
    }

};

export const deletePostController = async (req, res) => {
    try {
        
        const deletedPost = await deletePost(req.params,req.body);
        
        res.status(200).json({
            deletedPost,
            message: "Post has been deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "Post could not be delete",
            error,
        }
        );
    }
};


export const likeAndDislikeController = async (req, res) => {
    try {
        const post = await likeAndDislike(req.params,req.body);
        res.status(200).json({
            post,
            message: "Post has been liked and disliked successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Post Like or Dislike action failed",
            error,
        }
        );
    }
};


export const getPostController = async (req, res) => {
    try {
        const post = await getPost(req.params);
        res.status(200).json({
            post,
            message: "Post has been fetched successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Post fetch failed",
            error,
        }
        );
    }
};


export const getTimelinePostsController = async (req, res) => {
    try {
        const posts = await getTimelinePosts(req.params);
        res.status(200).json({
            posts,
            message: "Timeline post fetched successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Post fetch failed",
            error,
        }
        );
    }
};


export const getAllPostsController = async (req, res) => {
    try {
        const posts = await getAllPosts();
        res.status(200).json({
            posts,
            message: "Posts have been fetched successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Posts fetch failed",
            error,
        }
        );
    }
};
