import axios from 'axios'

const url = 'http://localhost:5000/posts'

export const fetchPosts = () => axios.get(`${url}/all`)
export const createPost = (newPost) => axios.post(`${url}/create`, newPost)

export const readPost = (id) => axios.get(`${url}/${id}`, id)
export const updatePost = (post) => axios.patch(`${url}/${post._id}`, post)
export const deletePost = (id) => axios.delete(`${url}/${id}`)