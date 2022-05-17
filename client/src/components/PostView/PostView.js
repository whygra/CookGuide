import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useState} from 'react'
import styles from './PostView.module.css'
import { useSearchParams, Link } from 'react-router-dom';

import Chart from './Chart/Chart'
import Components from './Components/Components'
import { setReadable } from 'actions/readablePost'

const PostView = (props) => {

    const [searchParams, setPostId] = useSearchParams()
    const postId = searchParams.get("post");
    
    const dispatch = useDispatch()
    // set redux state
    dispatch(setReadable(postId))

    const post = useSelector((state) => state.readablePost)

    console.log(Object.keys(post).length)

    if (Object.keys(post).length == 0){
        return(<h1>Loading...</h1>)
    }
    return(
        <div className={styles.postDetails}>
        <Link to={`/edit/?post=${postId}`}>edit</Link>
        <form className={styles.form}>
        <fieldset disabled={true}>
        <input
        type="text" value={post.title} className={styles.title}/>
        <img className={styles.image} src={post.img}/>
        <div className={styles.postBody}>
        <Components comps={post.comps}/>
        <Chart time={post.time} tasks={post.tasks}/>
        </div>
        </fieldset>
        </form>
        </div>
    )
}

export default PostView