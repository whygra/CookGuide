import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useState} from 'react'
import styles from './PostView.module.css'
import { useSearchParams, Link } from 'react-router-dom';

import Chart from './Chart/Chart'
import Components from './Components/Components'
import { setReadable } from 'actions/readablePost'

const PostView = () => {
    const [searchParams, setPostId] = useSearchParams()
    const postId = searchParams.get("post");
    
    const dispatch = useDispatch()
    // set redux state
    useEffect(()=> {
        dispatch(setReadable(postId))
    }, [])

    const post = useSelector((state) => state.readablePost)

    // if post not loaded (post._id didn't match url id param)
    // show loading indicator
    if (post._id !== postId){
        return(<h1>Loading...</h1>)
    }
    return(
        <div className={styles.postDetails}>
        <Link to={`/edit/?post=${postId}`}>edit</Link>
        <div className={styles.wrapper}>
        <div className={`label ${styles.title}`}>{post.title}</div>
        <img className={styles.image} src={post.img}/>
        <div className={styles.postBody}>
        <Components comps={post.comps}/>
        <Chart time={post.time} tasks={post.tasks}/>
        </div>
        </div>
        </div>
    )
}

export default PostView