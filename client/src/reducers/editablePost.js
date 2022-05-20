import image from 'images/9th.png'

const initTasks = [
    {title: "", timeStart: 0, timeEnd: 15, key: "init0"},
]

const initComponents = [
    {title: "", quantity: 0, key: "init0"},
]

const initPost = {
    title: "", img: image, time: 60,
    comps: initComponents, tasks: initTasks
}

export default (post = initPost, action) => {
    switch (action.type) {

        case 'SET_EDITABLE':
            return action.payload
        case 'RESET_EDITABLE':
            return initPost
        case 'SET_TITLE':
            return {...post, title: action.payload}
        case 'SET_IMG':
            return {...post, img: action.payload}
        case 'SET_TIME':
            return {...post, time: action.payload}
        case 'SET_COMPS':
            return {...post, comps: action.payload}
        case 'SET_TASKS':
            return {...post, tasks: action.payload}
        default:
            return post
    }
}