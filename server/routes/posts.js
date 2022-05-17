import express from 'express'
import { getPosts, createPost, getPost, updatePost } from '../controllers/posts.js'

const router = express.Router()

router.get('/all', getPosts) // get all posts
router.post('/create', createPost) // create new
router.put('/edit', updatePost) // TODO

router.get('/:id', getPost) // get post by id


export default router