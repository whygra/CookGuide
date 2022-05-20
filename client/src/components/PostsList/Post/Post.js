import { StylesContext } from '@material-ui/styles'
import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import {deletePost} from 'actions/posts'
import styles from './Post.module.css'

const Post = ({post}) => {

    const dispatch = useDispatch()

    return(
        <div className={styles.post}>
            <div className={styles.imgContainer}><img src={post.img}/></div>
            <Link to={`/view/?post=${post._id}`}><h1 className={styles.title}>{post.title}</h1></Link>
            <div className={styles.removeBtn}>
                <button onClick={() => dispatch(deletePost(post._id))}>X</button>
            </div>
        </div>
    )
}

export default Post