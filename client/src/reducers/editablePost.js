import image from 'images/dish01.jpg'

const initTasks = [
    {id: 0, name: "", timeStart: 0, timeEnd: 15, key: "init0"},
]

const initComponents = [
    {id: 0, name: "", quantity: 0, key: "init0"},
]

const initPost = {
    title: "", img: image, time: 60,
    comps: initComponents, tasks: initTasks
}

export default (post = initPost, action) => {
    switch (action.type) {
        case 'SET_EDITABLE':
            return action.payload
        case 'SET_TITLE':
            return action.payload
        case 'SET_IMG':
            return action.payload
        case 'SET_TIME':
            return action.payload
        case 'SET_COMPS':
            return action.payload
        case 'SET_TASKS':
            return action.payload
        default:
            return post
    }
}