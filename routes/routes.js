import express from 'express';
import  userRoutes  from './user.routes.js';
import  authRoutes  from './auth.routes.js';
import  postRoutes  from './post.routes.js';
const router = express.Router();


router.use("/api/v1/users",userRoutes);
router.use("/api/v1/auth",authRoutes);
router.use("/api/v1/posts",postRoutes);

export default router;