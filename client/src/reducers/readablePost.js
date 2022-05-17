import image from 'images/dish01.jpg'

const initTasks = [
    {id: 0, name: "qq", timeStart: 0, timeEnd: 15, key: "init0"},
    {id: 1, name: "qq", timeStart: 15, timeEnd: 50, key: "init1"},
    {id: 2, name: "qq", timeStart: 50, timeEnd: 60, key: "init2"},
]

const initComponents = [
    {id: 0, name: "comp", quantity: 1, key: "init0"},
    {id: 1, name: "comp", quantity: 1, key: "init1"},
]

const initPost = {
    title: "Title", img: image, time: 60,
    comps: initComponents, tasks: initTasks
}

export default (post = [], action) => {
    switch (action.type) {
        case 'SET_READABLE':
            return action.payload
        case 'SET_TITLE':
            return {...post, title: action.payload}
        default:
            return post
    }
}