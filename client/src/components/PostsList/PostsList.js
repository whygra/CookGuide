import React from 'react'
import Post from './Post/Post'

import { useSelector } from 'react-redux'

const PostsList = () => {
    const posts = useSelector((state) => state.posts)
    console.log(posts)
    return(
        <div>
            {posts.map((post) => (
                <Post key={post._id} post={post} />
            ))}
        </div>
    )
}

export default PostsList