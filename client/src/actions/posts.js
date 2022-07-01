import * as api from '../api'
import * as actions from 'constants/actionTypes'

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()

        const action = { type: actions.FETCH_ALL, payload: data }
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        console.log(data)

        const action = { type: actions.CREATE_POST, payload: data }
        dispatch(action)

    } catch (error) {
        console.log(error.message)
    }
}

export const updatePost = (post) => async (dispatch) => {
    try {

        const { data } = await api.updatePost(post)

        const action = { type: actions.UPDATE_POST, payload: data }
        dispatch(action)

    } catch (error) {
        console.log(error.message)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        const action = { type: actions.DELETE_POST, payload: id }
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }
}