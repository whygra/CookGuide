import express from 'express'
import { getPosts, createPost, getPost, updatePost, deletePost } from '../controllers/posts.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/all', getPosts) // get all posts
router.post('/create', auth, createPost) // create new
router.get('/:id', getPost) // get post by id
router.patch('/:id', auth, updatePost) // update
router.delete('/:id', auth, deletePost) // del

export default router