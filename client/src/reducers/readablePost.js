import image from 'images/dish01.jpg'
import * as actions from 'constants/actionTypes'

const initTasks = [
    {id: 0, name: "", timeStart: 0, timeEnd: 15, key: "init0"},
]

const initComponents = [
    {id: 0, name: "", quantity: 1, unit: "g", key: "init0"},
]

const initPost = {
    title: "Title", img: image, time: 60,
    comps: initComponents, tasks: initTasks
}

export default (post = [], action) => {
    switch (action.type) {
        case actions.SET_READABLE:
            return action.payload
        case actions.SET_TITLE:
            return {...post, title: action.payload}
        default:
            return post
    }
}