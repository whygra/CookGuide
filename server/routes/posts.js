import express from 'express'
import { getPosts, createPost, getPost, updatePost, deletePost } from '../controllers/posts.js'

const router = express.Router()

router.get('/all', getPosts) // get all posts
router.post('/create', createPost) // create new
router.get('/:id', getPost) // get post by id
router.patch('/:id', updatePost) // update
router.delete('/:id', deletePost) // del


export default router