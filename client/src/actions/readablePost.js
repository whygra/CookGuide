import * as api from '../api'

export const setReadable = (id) => async (dispatch) => {
    try {
        const { data } = await api.readPost(id)
        const action = { type: 'SET_READABLE', payload: data }
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }
}