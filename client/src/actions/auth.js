import * as api from '../api'
import * as actions from 'constants/actionTypes'

export const signin = (formData, history) => async (dispatch) => {
    try {
        // sign in user
        const {data} = await api.signin(formData)

        dispatch({type: actions.AUTH, data})

        history('/')
    } catch (error) {
        console.log(error.message)
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        // sign up user
        const {data} = await api.signup(formData)

        dispatch({type: actions.AUTH, data})
        console.log(data)

        history('/')
    } catch (error) {
        console.log(error.message)
    }
}