import mongoose from "mongoose"

import Post from "../models/post.js"

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
export const createPost = async (req, res) => {
    const post = req.body
    if(!req.userId) return res.json({message: 'Unauthenticated'})

    const newPost = new Post(
        {...post, creator: req.userId, createdAt: new Date().toISOString()}
    )
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const getPost = async (req, res) => {
    try {
        const id = new mongoose.Types.ObjectId(req.params.id)
        const post = await Post.findById(id)
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const updatePost = async (req, res) => {
    const id = req.body._id;
    const post = req.body;

    if(!req.userId) return res.json({message: 'Unauthenticated'})
    if(res.userId !== post.creator)
        return res.status(403).send('Attempt to edit other user\'s post')


    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`no post with id: '${id}'`)
    }
    const updatedPost = { ...post, _id: id }

    await Post.findByIdAndUpdate(id, updatedPost, { new: true })

    res.json(updatedPost)
}

export const deletePost = async (req, res) => {
    const id = req.params.id;
    const post = Post.findById(id)
    
    if(!req.userId) return res.json({message: 'Unauthenticated'})
    if(res.userId !== post.creator)
        return res.status(403).send('Attempt to delete other user\'s post')

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`no post with id: '${id}'`)
    }

    await Post.findByIdAndRemove(id)

    res.json({message: `post {_id: ${id}} deleted successfully`})
}