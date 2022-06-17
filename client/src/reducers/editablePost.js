import * as actions from 'constants/actionTypes'

import image from 'images/9th.png'

const initPost = {
    title: "", img: image, time: 60,
    comps: [
        {title: "group", comps: [
            {title: "", quantity: 1, unit: "g", key: Date.now()},
        ], key: Date.now()}
    ],
    tasks:[
        {title: "", timeStart: 0, timeEnd: 15, key: Date.now()},
    ]
}

export default (post = structuredClone(initPost), action) => {
    switch (action.type) {

        case actions.SET_EDITABLE:
            return action.payload
        case actions.RESET_EDITABLE:
            return structuredClone(initPost)
        case actions.SET_TITLE:
            return {...post, title: action.payload}
        case actions.SET_IMG:
            return {...post, img: action.payload}
        case actions.SET_TIME:
            return {...post, time: action.payload}
        case actions.SET_COMPS:
            return {...post, comps: action.payload}
        case actions.SET_TASKS:
            return {...post, tasks: action.payload}
        default:
            return post
    }
}