import * as api from '../api'
import * as actions from 'constants/actionTypes'

export const setEditable = (id) => async (dispatch) => {
    try {
        const { data } = await api.readPost(id)
        const action = { type: actions.SET_EDITABLE, payload: data }
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }
}

export const resetEditable = () => async (dispatch) => {
    try {
        const action = { type: actions.RESET_EDITABLE }
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }
}

export const setTitle = (title) => async (dispatch) => {
    try {
        const action = { type: actions.SET_TITLE, payload: title }
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }
}

export const setImg = (img) => async (dispatch) => {
    try {
        const action = { type: actions.SET_IMG, payload: img }
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }
}

export const setTime = (time) => async (dispatch) => {
    try {
        const action = { type: actions.SET_TIME, payload: time }
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }
}

export const setComps = (comps) => async (dispatch) => {
    try {
        const action = { type: actions.SET_COMPS, payload: comps }
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }
}

export const setTasks = (tasks) => async (dispatch) => {
    try {
        const action = { type: actions.SET_TASKS, payload: tasks }
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }
}