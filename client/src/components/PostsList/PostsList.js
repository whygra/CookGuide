import React from 'react'
import Post from './Post/Post'

import { useSelector } from 'react-redux'

const PostsList = () => {
    const posts = useSelector((state) => state.posts)

    return(
        <div>
            <h1>Posts List</h1>
            <Post/>
            <Post/>
        </div>
    )
}

export default PostsList