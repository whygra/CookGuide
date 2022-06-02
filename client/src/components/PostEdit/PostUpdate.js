import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './PostEdit.module.css'
import { useSearchParams, useNavigate } from 'react-router-dom';

import PostEdit from './PostEdit'
import { updatePost } from 'actions/posts'
import { setEditable } from 'actions/editablePost'

const PostUpdate = () => {

    const [searchParams, setPostId] = useSearchParams()
    const postId = searchParams.get("post")

    const navigate = useNavigate()
    const dispatch = useDispatch()
    // set redux state
    useEffect(()=> {
        dispatch(setEditable(postId))
    }, [])

    const post = useSelector((state) => state.editablePost)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updatePost(post)).then(() => {
            navigate(`/view/?post=${postId}`)
        })
        
    }
    if (post._id != postId){
        return (<h1>Loading...</h1>)
    }
    return(
        <div className={styles.postDetails}>
        
        <form className={styles.form}>
        <fieldset>

        <PostEdit />

        <button className={styles.submit} onClick={handleSubmit}>submit</button>

        </fieldset>
        </form>
        </div>
    )
}

export default PostUpdate