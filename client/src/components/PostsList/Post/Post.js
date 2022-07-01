import { StylesContext } from '@material-ui/styles'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import {deletePost} from 'actions/posts'
import styles from './Post.module.css'

const Post = ({post}) => {

    const dispatch = useDispatch()

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    useEffect(()=> {
        const token = user?.token

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [])
    return(
        <div className={styles.post}>
            <div className={styles.imgContainer}><img src={post.img}/></div>
            <Link to={`/view/?post=${post._id}`}><h1 className={styles.title}>{post.title}</h1></Link>
            <div className={styles.removeBtn}>
                {user && (user?.result?._id === post.creator) && 
                <button onClick={() => dispatch(deletePost(post._id))}>X</button>
                }
            </div>
        </div>
    )
}

export default Post