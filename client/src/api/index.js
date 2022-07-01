import axios from 'axios'

const API = axios.create({ baseUrl: 'http://localhost:5000' })

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization =
            `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req
})

export const fetchPosts = () => API.get(`/posts/all`)
export const createPost = (newPost) => API.post(`/posts/create`, newPost)

export const readPost = (id) => API.get(`/posts/${id}`, id)
export const updatePost = (post) => API.patch(`/posts/${post._id}`, post)
export const deletePost = (id) => API.delete(`/posts/${id}`)

export const signin = (formData) => API.post('/users/signin', formData)
export const signup = (formData) => API.post('/users/signup', formData)