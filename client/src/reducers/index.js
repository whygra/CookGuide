import { combineReducers } from "redux";

import posts from './posts'
import readablePost from './readablePost'
import editablePost from './editablePost'

export default combineReducers({
    posts,
    readablePost,
    editablePost
})