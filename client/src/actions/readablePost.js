import * as api from '../api'
import * as actions from 'constants/actionTypes'

export const setReadable = (id) => async (dispatch) => {
    try {

        const { data } = await api.readPost(id)
        const action = { type: actions.SET_READABLE, payload: data }
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }
}