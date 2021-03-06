import express from 'express';

import { getPosts,commentPost, getPostsBySearch, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';
import auth from "../controllers/userMidl.js";

const router = express.Router();

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', auth,  createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.post('/:id/commentPost', commentPost);
router.patch('/:id/likePost', auth, likePost);


export default router;