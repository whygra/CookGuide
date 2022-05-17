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

    const newPost = new Post(post)
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
    // todo
}